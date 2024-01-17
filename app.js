const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors');
app.use(cors());
dotenv.config();
const sequelize = require("./db/db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const noteRoutes = require("./routes/note");
app.use("/notes", noteRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database  synced.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
