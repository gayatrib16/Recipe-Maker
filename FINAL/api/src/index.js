const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user.js");
const { recipesRouter } = require("./routes/recipes.js"); // Corrected import
const app = express();
const dotenv=require("dotenv")
dotenv.config({path:"config.env"})
const PORT=process.env.PORT
app.use(express.json());
app.use(cors());


const dbConnection = async() => {
  await mongoose
    .connect('mongodb+srv://gayatrisbadgujar1606:Study$16@recipes.43oeohq.mongodb.net', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.error(err);
    });
};

dbConnection();
app.use("/", startRoutes);
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter); // Corrected usage
app.listen(PORT, () => console.log("Server started on port 3001"));

