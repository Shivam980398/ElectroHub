const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // for parsing application/json
app.use(
  cors({
    origin: ["http://localhost:5173", "https://electrohubs.netlify.app"],
  })
);
const user = require("../routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
const dbConnect = require("../config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Hello World </h1>`);
});
