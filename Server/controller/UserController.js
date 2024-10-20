
const jwt = require("jsonwebtoken");
const User = require("../models/User");
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


module.exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json("not found");
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const usersList = await User.find(); 
    res.status(200).json({ usersList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteUserByID = async (req, res) => {
  try {
    const { id } = req.params; //njibo id user
    const chekIfUserExists = await User.findById(id); 
    if (!chekIfUserExists) {
      throw new Error("user not found"); 
    }
    await User.findByIdAndDelete(id); 
    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.updateUser = async (req, res) => {
  try {
    const { email} = req.body; 
    const { id } = req.params;
    const chekIfUserExists = await User.findById(id); 
    if (!chekIfUserExists) {
      throw new Error("user not found"); 
    }
    const updates = await User.findByIdAndUpdate(id, {
     
      $set: { email, nom, prenom },
    });
    res.status(200).json("useradded");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



