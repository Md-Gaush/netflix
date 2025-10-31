const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// login
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or Password",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Email or Password",
        success: false,
      });
    }

    const token = await jwt.sign({ id: user._id }, "ertyuiofghj", {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true, 
        secure: false,
        sameSite: "Lax", 
        maxAge: 24 * 60 * 60 * 1000, 
      })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
        user
      });
  } catch (error) {
    console.log(error);
  }
};

// logout
const logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: 0, httpOnly: true })
    .json({
      message: "User logged out successfully",
      success: true,
    });
};

// register
const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
   
    if (!name || !email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "This email is already use",
        success: false,
      });
    }
    const hashed = await bcrypt.hash(password, 16);

    await User.create({
      name,
      email,
      password: hashed,
    });
    return res.status(201).json({
      message: "User Created",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "User Not Created",
      success: false,
    });
  }
};

module.exports = {
  Register,
  Login,
  logout,
};
