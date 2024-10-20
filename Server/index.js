const express = require("express");
const app = express();
const userRoutes = require("./routes/UserRouter");
const Connection = require("./dataBase/db");
const cors = require("cors");
const bodyPorser = require("body-parser");

const PORT = 3000;
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Import your user routes


Connection();

app.use(bodyPorser.json())

app.use("/api/users", userRoutes);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running and App is listening on port " + PORT
    );
  } else console.log("Error occurred, server can't start", error);
});
