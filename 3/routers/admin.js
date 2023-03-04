const express = require("express");
const router = express.Router();
const { join } = require("path");
const {writeFile} = require('fs/promises')
const data = require("../db/users-data.json");

router.get('/get-all-user',(req,res) =>{
    res.status(200).sendFile(join(__dirname,'../views/admin-panel.html'))
})

router.delete('/deleteuser',(req, res) =>{
    const {username} =req.body;
    const updateData = data.filter(item => item.username !== username);
    writeFile(join(__dirname,'../db/users-data.json'),JSON.stringify(updateData))
    console.log(updateData)
    res.json(updateData)
})

router.get('/userinfo',(req, res) => {
    res.json(data);
})

module.exports = router;
