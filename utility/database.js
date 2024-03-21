const { MongoClient } = require("mongodb");

let _db;

const mongoConnect = (callBack) => {
  MongoClient.connect(
    "mongodb+srv://nicolaj215:9kGc6X6ccDqGdODx@cluster0.hnmh4z7.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callBack();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
