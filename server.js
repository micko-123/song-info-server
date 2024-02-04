const app = require("./app");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const port = process.env.PORT || 8000;

// connect to database
connectDB();

app.listen(port, () => {
  console.log(`server is listening at ${port}...`);
});
