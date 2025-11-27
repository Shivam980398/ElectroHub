const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // for parsing application/json
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204,
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

// Handling preflight requests
app.use(cors({
  origin: 'https://electrohubs.netlify.app', // Specify the exact frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Explicitly allow methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify headers the client sends
}));

const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Hello World </h1>`);
});
