const express = require("express");
const { join } = require("path");
const app = express();
const productRouter = require('./routers/productRouter')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/product',productRouter)

app.get('/product-page',(req,res) => {
    res.sendFile(join(__dirname,'./views/index.html'))
});

app.listen(3000);
