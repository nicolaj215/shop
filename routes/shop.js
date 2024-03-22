const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

// // Telling Express.js :productId is a dynamic route
// // Also since this is a dynamic route, any specific route of /products/x should be above this one
router.get("/products/:productId", shopController.getProduct);

// router.get("/cart", shopController.getCart);

// router.post("/cart", shopController.postCart);

// // router.post("/cart-delete-item", shopController.postCartDeleteProduct);

// // router.get("/orders", shopController.getOrders);

// // router.get("/checkout", shopController.getCheckout);

module.exports = router;
