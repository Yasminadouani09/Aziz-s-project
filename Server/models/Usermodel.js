const mongoose = require("mongoose");

// Define the User schema
const Usermodel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, 
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
); 

const User = mongoose.model("User", Usermodel);

module.exports = User;
