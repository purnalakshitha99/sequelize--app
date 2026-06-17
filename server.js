const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");



dotenv.config();

const app = express();

app.use(express.json());


const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database Connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed:", err.message);
    console.log(err);
  });