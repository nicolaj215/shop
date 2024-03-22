const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);

// const { ObjectId } = require("mongodb");
// const getDb = require("../utility/database").getDb;

// module.exports = class Product {
//   constructor(id, title, imageUrl, price, description, userId) {
//     this._id = id ? ObjectId.createFromHexString(id) : null;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.price = price;
//     this.description = description;
//     this.userId = userId;
//   }
//   save() {
//     const db = getDb();
//     let dbOperation;
//     if (this._id) {
//       dbOperation = db
//         .collection("products")
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//       dbOperation = db.collection("products").insertOne(this);
//     }
//     return dbOperation
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find()
//       .toArray() // only if you know that the array will not be too large
//       .then((products) => {
//         console.log(products);
//         return products;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static findById(prodId) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .findOne({ _id: ObjectId.createFromHexString(prodId) })
//       .then((product) => {
//         console.log(product);
//         return product;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static deleteById(prodId) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .deleteOne({ _id: ObjectId.createFromHexString(prodId) })
//       .then((result) => {
//         console.log("Deleted");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// };

// // const fs = require("fs");
// // const path = require("path");

// // const Cart = require("./cart");

// // const p = path.join(
// //   path.dirname(require.main.filename),
// //   "data",
// //   "products.json"
// // );

// // const getProductsFromFile = (cb) => {
// //   fs.readFile(p, (err, fileContent) => {
// //     if (err) {
// //       if (err.code === 'ENOENT') {
// //         // File does not exist, return empty array
// //         cb([]);
// //       } else {
// //         // Other error occurred, handle it appropriately
// //         console.error('Error reading file:', err);
// //         cb([]);
// //       }
// //     } else {
// //       cb(JSON.parse(fileContent));
// //     }
// //   });
// // };

// // module.exports = class Product {
// //   constructor(id, title, imageUrl, price, description) {
// //     this.id = id;
// //     this.title = title;
// //     this.imageUrl = imageUrl;
// //     this.price = price;
// //     this.description = description;
// //   }
// //   save() {
// //     getProductsFromFile((products) => {
// //       if (this.id) {
// //         const existingProductIndex = products.findIndex((prod) => {
// //           return prod.id === this.id;
// //         });
// //         const updatedProducts = [...products];
// //         updatedProducts[existingProductIndex] = this;
// //         fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
// //           console.log(err);
// //         });
// //       } else {
// //         this.id = Math.random().toString();
// //         products.push(this);
// //         fs.writeFile(p, JSON.stringify(products), (err) => {
// //           console.log(err);
// //         });
// //       }
// //     });
// //   }

// //   static deleteById(id) {
// //     getProductsFromFile((products) => {
// //       const product = products.find((prod) => {
// //         return prod.id === id;
// //       });
// //       const updatedProducts = products.filter((prod) => {
// //         return prod.id !== id;
// //       });
// //       fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
// //         if (!err) {
// //           Cart.deleteProduct(id, product.price);
// //         }
// //       });
// //     });
// //   }

// //   static fetchAll(cb) {
// //     getProductsFromFile(cb);
// //   }

// //   static findById(id, cb) {
// //     getProductsFromFile((products) => {
// //       const product = products.find((p) => {
// //         return p.id === id;
// //       });
// //       cb(product);
// //     });
// //   }
// // };
