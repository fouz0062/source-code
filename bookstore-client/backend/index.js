const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const path = require("path");

const books = require("./routes/books");

// app.use(
//   "/public/images",
//   express.static(path.join(__dirname), "/public/images")
// );

app.use(cors());
app.use(helmet());

const whileList = [
  "http://localhost",
  "http://localhost:3000",
  "https://fouz0062.github.io",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (whileList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed because of CORS policy"));
      }
    },
    optionsSuccessStatus: 200,
  })
);

app.use("/api/v1", books);

// app.use("/api/v1/author", author);

// app.use("/api/v1/genre", genre);

// app.get("/*", (req, res) => {
//   return res.send("404");
// });
// app.get("/", (req, res) => {
//   res.send("express js");
// });
// app.get("/about", (req, res) => {
//   console.log(req.path);
//   res.send("express js about page");
// });
// const PORT = 4004;
//Port coming from env file
app.listen(process.env.PORT, () => {
  console.log("up and running in the port" + process.env.PORT);
});
