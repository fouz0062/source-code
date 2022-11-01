const express = require("express");
const { ObjectId } = require("mongodb");
const db = require("../db.js");

const genreshow = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;
    db.getDB()
      .collection("Genre")
      .aggregate([
        {
          $project: {
            Type: "$Type",
            link: {
              $concat: [
                "<a href='http://localhost:4004/api/v1/deletegenre/",
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
        out.genre = res1;
        res.json(res1);
        console.log(res1);
      });
  });
};
const genreCreate = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;

    db.getDB()
      .collection("Genre")
      .insertOne(
        {
          "genre-type": "new",
        },
        (err, res1) => {
          if (err) throw err;
          res.send(res1);
        }
      );
  });
};

const genreUpdate = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;

    db.getDB()
      .collection("Genre")
      .updateOne(
        { "genre-type": "new" },
        { $set: { newField: "new" } },
        (err, res1) => {
          if (err) throw err;
          res.send(res1);
        }
      );
  });
};

const genreDelete = (req, res) => {
  db.connectDB((err) => {
    if (err) throw err;
    db.getDB()
      .collection("Genre")
      .deleteOne({ _id: new ObjectId(req.params.id) }, (err, res1) => {
        if (err) throw err;
        res.send(res1);
      });
  });
};

module.exports = {
  genreCreate,
  genreshow,
  genreUpdate,
  genreDelete,
};
