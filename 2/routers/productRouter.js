const express = require("express");
const {join} = require('path');
const productsData = require('../db/products-data.json');
const {writeFile, writeFileSync} = require('fs');
const { Console } = require("console");
const router = express.Router();

router.post('/createProduct',(req,res) => {
  productsData.push(req.body);
  writeFileSync(join(__dirname,'../db/products-data.json'),JSON.stringify(productsData));
  res.json(productsData)
})

router.get("/productGet", (req, res) => {
   return res.json(productsData);
});

router.delete("/deleteProduct", (req, res) => {
  const {id} = req.body;
  const newData = productsData.filter( item => item.id !== id )
  console.log(newData)
  try {
   writeFileSync(join(__dirname,'../db/products-data.json'),JSON.stringify(newData));
  } catch (error) {
   console.log(error)
  }
  res.send(newData)
});

router.put("/updateProduct", (req, res) => {
  const {id,title,price,rating,stock,brand,category} =req.body
  const findProduct = productsData.find(item => item.id === +id);

  if (title) findProduct.title = title;
  if (price) findProduct.price = price;
  if (rating) findProduct.rating = rating;
  if (stock) findProduct.stock = stock;
  if (brand) findProduct.brand = brand;
  if (category) findProduct.category = category;

  writeFileSync(join(__dirname,'../db/products-data.json'),JSON.stringify(productsData));
  res.json(productsData)
});

module.exports = router;
