const express = require('express');
const data = require('./db/users-data.json')
const authRouter = require('./routers/authrouter')
const adminRouter = require('./routers/admin')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/auth',authRouter)
app.use('/admin',adminRouter)


app.get('*',(req,res) =>{
    res.send('invali url')
})


app.listen(3000);