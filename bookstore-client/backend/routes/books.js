const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const db = require("../db.js");
const book = require("../controllers/booksControllers");
const author = require("../controllers/authorControllers");
const genre = require("../controllers/genreControllers");
const multer = require("multer");
const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }

    cb(undefined, true);
  },
});

router.get("/show/books", book.booksshow);

router.post("/create", upload.single("upload"), book.booksCreate);

router.get("/update", book.booksUpdate);

router.get("/books/delete/:id", book.booksDelete);

//author

router.get("/show/author", author.authorshow);

router.get("/createauthor", author.authorCreate);

router.get("/updateauthor", author.authorUpdate);

router.get("/deleteauthor/:id", author.authorDelete);

//
router.get("/show/genre", genre.genreshow);

router.get("/creategenre", genre.genreCreate);

router.get("/updategenre", genre.genreUpdate);

router.get("/deletegenre/:id", genre.genreDelete);

//find using value

// router.get("/show/:genre", (req, res) => {
//   // mongo.connect(process.env.DB_URL, (err, db) => {
//   //   let conn = db.db("BookStore");
//   //   conn
//   //     .collection("Books")
//   //     .find({})
//   //     .toArray((err, res1) => {
//   //       if (err) throw err;
//   //       res.send(res1);
//   //     });
//   // });
//   let genreID;
//   db.connectDB((err) => {
//     if (err) throw err;
//     db.getDB()
//       .collection("Genre")
//       .find({
//         $or: [{ "genre-type": req.params.genre }, { _id: req.params.genre }],
//       })
//       .toArray((err, res1) => {
//         if (err) throw err;
//         console.log(res1);
//         genreID = res1[0]._id;
//         // console.log("fouzi" + genreID);
//         // res.send(genreID);
//         db.getDB()
//           .collection("Books")
//           .find({ Genre: genreID })
//           .toArray((err, res1) => {
//             if (err) throw err;
//             res.send(res1);
//           });
//       });
//   });
// });

// router.get("/show/:genreauthor/:book", (req, res) => {
//   // mongo.connect(process.env.DB_URL, (err, db) => {
//   //   let conn = db.db("BookStore");
//   //   conn
//   //     .collection("Books")
//   //     .find({})
//   //     .toArray((err, res1) => {
//   //       if (err) throw err;
//   //       res.send(res1);
//   //     });
//   // });
//   let results = [];
//   let genreID;
//   db.connectDB(async (err) => {
//     if (err) throw err;

//     await db
//       .getDB()
//       .collection("Genre")
//       .find({
//         $or: [
//           { "genre-type": req.params.genreauthor },
//           { _id: req.params.genreauthor },
//         ],
//       })
//       .toArray(async (err, res1) => {
//         if (err) throw err;
//         if (res1.length > 0) {
//           genreID = res1[0]._id;
//           await db
//             .getDB()
//             .collection("Books")
//             .find({ Genre: genreID, Title: req.params.book })
//             .toArray((err, res1) => {
//               if (err) throw err;
//               results.push(res1);
//               res.send(res1);
//               console.log(results);
//             });
//         }
//       });
//   });
// });

module.exports = router;
