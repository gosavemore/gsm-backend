const express = require("express");
const ProductModel = require("../models/productsModel");

const router = express.Router();

router.get("/", (req, res) => {
  ProductModel.find()
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ err: err.message }));
});

// router.get("/:productName", (req, res) => {
//   const productName = req.params;
//   ProductModel.findByName(productName)
//     .then((name) => {
//       res.status(200).json(name);
//       console.log(name);
//     })
//     .catch((err) => res.status(500).json({ err: err.message }));
// });

router.get("/:id", (req, res) => {
  let id = req.params;
  ProductModel.findById(id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});

router.post("/", (req, res) => {
  const newProduct = req.body;
  const data = {
    ...newProduct,
    productName: newProduct.productName.toLowerCase(),
  };

  ProductModel.addProduct(data)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ err: err.message }));
});

// router.put("/:productName", async (req, res) => {
//   let { productName } = req.params;
//   productName = productName.toLowerCase();

//   try {
//     let searchResult = await ProductModel.findByName(productName);

//     if (!searchResult) {
//       res.status(404).json({ message: "That product does not exist." });
//     } else {
//       const changes = req.body;
//       const updated = await ProductModel.editProduct(searchResult, changes);

//       res.status(200).json({ updated });
//     }
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.put("/:id", async (req, res) => {
  try {
    let id = req.params;
    const changes = req.body;

    let searchResult = await ProductModel.findById(id);
    if (!searchResult) {
      res.status(404).json({ message: "That product does not exist." });
    } else {
      const updated = await ProductModel.editProduct(searchResult, changes);
      res.status(200).json({ updated });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete("/:productName", (req, res) => {
//   const { productName } = req.params;
//   ProductModel.deleteProduct({ productName })
//     .then((del) => res.status(200).json({ msg: "Product deleted" }))
//     .catch((err) => res.status(500).json({ err: err.message }));
// });

router.delete("/:id", (req, res) => {
  const id = req.params;
  ProductModel.deleteProduct(id)
    .then(() => res.status(200).json({ msg: "Product deleted" }))
    .catch((err) => res.status(500).json({ err: err.message }));
});

module.exports = router;
