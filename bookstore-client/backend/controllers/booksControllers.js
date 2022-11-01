const express = require("express");
const { ObjectId } = require("mongodb");
const db = require("../db.js");
const multer = require("multer");

// const booksshow = (req, res) => {
//   db.connectDB((err) => {
//     if (err) throw err;
//     db.getDB()
//       .collection("Books")
//       .find({})
//       .toArray((err, res1) => {
//         if (err) throw err;
//         res.json(res1);
//       });
//   });
// };

const booksshow = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;
    db.getDB()
      .collection("Books")
      .aggregate([
        {
          $project: {
            // _id: 0,
            // id: "$_id",
            Title: "$Title",
            Author: "$Author",
            Genre: "$Genre",
            Rating: "$Rating",
            pictures: [{ url: "$url", desc: "$desc" }],
            _id: {
              $toString: "$_id",
            },
            link: {
              $concat: [
                "<a href='http://localhost:4004/api/v1/books/delete/",
                { $toString: "$_id" },
                "'>Delete</a>",
              ],
            },
            id: "$_id",
          },
        },
      ])
      .toArray((err1, res1) => {
        if (err1) throw err1;
        res.set("Access-Control-Expose-Headers", "X-Total-Count");
        res.set("Access-Control-Expose-Headers", "Content-Range");
        res.set("X-Total-Count", res1.length);
        res.set("Content-Range", res1.length);
        let out = {};
        out.books = res1;
        res.json(res1);
        console.log(res1);
      });
  });
};

const booksCreate = async (req, res) => {
  const buffer = await sharp(req.file.buffer)
    .resize({ height: 250, width: 250 })
    .png()
    .toBuffer();
  db.connectDB((err) => {
    if (err) throw err;

    db.getDB()
      .collection("Books")
      .insertOne(
        {
          Title: "Fouziya",
          Author: ObjectId("631caa059b051fa29af8bb64"),
          Genre: ObjectId("631ca74d9b051fa29af8bb5e"),
          Rating: 3.6,
          pictures: [{ src: "", title: "" }],
        },
        (err, res1) => {
          if (err) throw err;
          res.send(res1);
        }
      );
  });
};

const booksUpdate = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;

    db.getDB()
      .collection("Books")
      .updateOne(
        { Title: "Fouziya" },
        { $set: { newField: "new" } },
        (err, res1) => {
          if (err) throw err;
          res.send(res1);
        }
      );
  });
};

const booksDelete = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;
    db.getDB()
      .collection("Books")
      .deleteOne({ _id: new ObjectId(req.params.id) }, (err, res1) => {
        if (err) throw err;
        res.send(res1);
      });
  });
};

module.exports = {
  booksCreate,
  booksshow,
  booksUpdate,
  booksDelete,
};
