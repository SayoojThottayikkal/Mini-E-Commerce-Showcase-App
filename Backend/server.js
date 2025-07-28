const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mangoose connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running port ${PORT}`);
});
