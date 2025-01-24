const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

require("dotenv").config();

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
