
const jwt = require("jsonwebtoken");
const User = require("../models/Usermodel");
const bcrypt = require("bcryptjs");
const JWT_SECRET = process.env.JWT_SECRET

exports.addUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ user, token }); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
