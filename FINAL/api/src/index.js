const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user.js");
const { recipesRouter } = require("./routes/recipes.js"); // Corrected import
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter); // Corrected usage

const dbConnection = () => {
  mongoose
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
app.listen(3001, () => console.log("Server started on port 3001"));

