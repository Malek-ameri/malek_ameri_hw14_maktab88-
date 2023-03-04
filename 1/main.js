const express = require("express");


const app = express();
const productRouter =require('./router/product')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/product',productRouter)

app.get("*", (req, res) => {
  res.status(404).send("Your page not found");
});

app.listen(3000);
