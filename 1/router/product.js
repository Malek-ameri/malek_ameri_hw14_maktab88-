const express = require("express");
const router = express.Router();
const { writeFile, writeFileSync } = require("fs");
const products = require("../db/products-data.json");
const { join } = require("path");

router.get("/get-all-products", (req, res) => {
  res.status(200).json(products);
});

router.get("/get-product/:id", (req, res) => {
  const { id } = req.params;
  const desiredProduct = products.find((item) => item.id === +id);
  res.status(200).json(desiredProduct);
});

router.post("/create-product", (req, res) => {
  products.push(req.body);
  writeFileSync(
    join(__dirname, "../db/products-data.json"),
    JSON.stringify(products)
  );
  res.status(201).json(req.body);
});

router.put("/update-product/:id", (req, res) => {
  const product = products.find((item) => item.id == req.params.productId);

  try {
    fs.writeFileSync(
      path.join(__dirname, "../db/product.json"),
      JSON.stringify(products)
    );
  } catch (err) {
    console.log(err);
    return res.status(400).send("Try again later!");
  }

  res.json(product);
});

router.delete("/remove-product/:id", (req, res) => {
  const productsTemp = products.filter((item) => item.id != req.params.id);

  try {
    fs.writeFileSync(
      path.join(__dirname, "../db/product.json"),
      JSON.stringify(productsTemp)
    );
  } catch (err) {
    console.log(err);
    return res.status(400).send("Try again later!");
  }

  res.send("remove product");
});

module.exports = router;
