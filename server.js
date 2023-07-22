const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// require('dotenv').config({ path: '.env' });
const colors = require("colors");
// const DBConnect = require("./utils/dbConnect");

const app = require("./app");

// database connection
// DBConnect();
mongoose.connect(process.env.DATABASE).then(() =>{
  console.log(`Database connection is successful`.green.bold);;
})

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});

