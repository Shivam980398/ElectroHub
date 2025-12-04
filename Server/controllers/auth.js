const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendmail = require("../Utils/nodemailer");
require("dotenv").config();
const crypto = require("crypto");

// sign Up  route handler
exports.signup = async (req, res) => {
  try {
    //get data
    const { firstName, lastName, email, password, number } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email, number });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    //secure password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Eror in hashing password",
      });
    }

    //create entry for user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      number,
    });
    sendmail("signup", user);
    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User Cant be registered",
    });
  }
};

// login route handler
exports.login = async (req, res) => {
  try {
    // get data
    const { email, password } = req.body;

    //validattion on email or password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email or password",
      });
    }
    // check if user exists
    let user = await User.findOne({ email }); // email is unique
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }
    const payload = {
      email: user.email,
      id: user._id,
    };

    //verify password and generate jwt token
    if (await bcrypt.compare(password, user.password)) {
      // password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user = user.toObject();
      user.token = token;
      user.password = undefined;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User logged in successfully",
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

// forget password

exports.forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    // Generate token and save user
    const resetToken = user.getResetPasswordToken();
    await user.save();

    // Construct reset URL
    const resetUrl = ` https://electrohubs.netlify.app/resetpassword/${resetToken} `;

    // Prepare email data
    const resetInfo = {
      email: user.email,
      resetUrl,
    };

    // Send email
    sendmail("forgetPassword", resetInfo);

    return res.status(200).json({
      success: true,
      message: "Password reset link sent",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Password reset failed",
    });
  }
};

//resetToken
// const crypto = require("crypto");

exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;
    const { resetToken } = req.params;

    // Hash the token and check if user exists
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    let user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Token",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // Secure password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Password reset failed",
    });
  }
};
