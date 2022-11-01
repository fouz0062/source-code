const express = require("express");
const { ObjectId } = require("mongodb");
const db = require("../db.js");

const authorshow = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;

    db.getDB()
      .collection("Author")
      .aggregate([
        {
          $project: {
            Name: "$Name",
            link: {
              $concat: [
                "<a href='http://localhost:4004/api/v1/deleteauthor/",
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
        out.author = res1;
        res.json(res1);
        console.log(res1);
      });
  });
};

const authorCreate = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;

    db.getDB()
      .collection("Author")
      .insertOne({ "Author-Name": "Fouziya" }, (err, res1) => {
        if (err) throw err;
        res.send(res1);
      });
  });
};

const authorUpdate = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;

    db.getDB()
      .collection("Author")
      .updateOne(
        { "Author-Name": "Fouziya" },
        { $set: { newField: "new" } },
        (err, res1) => {
          if (err) throw err;
          res.send(res1);
        }
      );
  });
};

const authorDelete = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;
    db.getDB()
      .collection("Author")
      .deleteOne({ _id: new ObjectId(req.params.id) }, (err, res1) => {
        if (err) throw err;
        res.send(res1);
      });
  });
};

module.exports = {
  authorCreate,
  authorshow,
  authorUpdate,
  authorDelete,
};
