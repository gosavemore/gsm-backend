const express = require("express");
const ShoppingCartModel = require("../models/shoppingCartModel");
const ProductModel = require("../models/productsModel");
const router = express.Router();

router.get("/", (req, res) => {
  ShoppingCartModel.getCart()
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json({ err: err.message }));
});

// add
router.post("/:productName", async (req, res) => {
  const { productName } = req.params;

  let productDetails = await ProductModel.findByName({ productName });

  let shoppingCart = await ShoppingCartModel.addToCart(productDetails);

  res.status(200).json({ message: `product added ${shoppingCart}` });
});

// editCart
// router.delete("/", (req, res) => {
//   ShoppingController.deleteCart()
//     .then((cart) => res.status(200).json({ message: "Shopping Cart Deleted" }))
//     .catch((err) => res.status(500).json({ err: err.message }));
// });

module.exports = router;
