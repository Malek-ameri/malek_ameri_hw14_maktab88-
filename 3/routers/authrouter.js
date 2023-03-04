const express = require("express");
const router = express.Router();
const { join } = require("path");
const data = require("../db/users-data.json");
const { isEmpty, isLength, isPassword } = require("./validation");
const {writeFile} = require('fs/promises')

router.get("/signup", (req, res) => {
  res.sendFile(join(__dirname, "../views/signup-page.html"));
});

router.post(
  "/createUser",
  isEmpty("gender"),
  isEmpty("lastname"),
  isEmpty("username"),
  isLength("firsname"),
  isLength("lastname"),
  isLength("username"),
  isEmpty("firsname"),
  isPassword("password"),
  async (req, res) => {
    const { isValid, message } = req.validation;
    if (!isValid) return res.status(404).send(message);

    const { username } = req.body;
    const existUsername = data.find((item) => item.username === username);
    if (!!existUsername) return res.status(409).send({status:"this username is exist"});
    data.push(req.body)

    await writeFile(join(__dirname,'../db/users-data.json'),JSON.stringify(data))

    res.status(201).json({status:"createuser"})
  }
);

router.get("/login", (req, res) => {
  res.sendFile(join(__dirname, "../views/login-page.html"));
});

router.post ('/loginUser',isEmpty('password'),isEmpty('username'),(req,res) =>{
  const { isValid, message } = req.validation;
  if (!isValid) return res.status(403).send(message);

  const {username, password} = req.body
  const usernamefind = data.find(item => item.username === username);


  if(!usernamefind) return res.status(445).json({username:"username not found"});
  if(usernamefind && usernamefind.password !== password) return res.status(410).json({password:"your password is rang"});

  res.status(200).json({status:"ok"})
})


module.exports = router;
