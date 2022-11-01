require("dotenv").config();

// const mongo = require("mongodb").MongoClient;

const { MongoClient } = require("mongodb");
let dataBase;

module.exports = {
  connectDB: function (callback) {
    MongoClient.connect(process.env.DB_URL, (err, db) => {
      if (err) throw err;
      dataBase = db.db("BookStore");
      return callback(err);
    });
  },
  getDB: function () {
    return dataBase;
  },
};
