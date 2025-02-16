const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  forgetPassword,
  resetPassword,
} = require("../controllers/auth");

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgetPassword", forgetPassword);
router.post("/resetpassword/:resetToken", resetPassword);

module.exports = router;
