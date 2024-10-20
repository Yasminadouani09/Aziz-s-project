const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET


const auth = async (req, res, next) => {
  try {
   
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, JWT_SECRET); 

    req.user = decoded; 
    next(); 
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = auth;

