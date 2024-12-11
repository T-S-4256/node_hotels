const express=require("express");
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());



app.get('/',(req,res)=>{
    res.send("THIS IS MY HOME PAGE!");
})










app.listen(3000,()=>{
    console.log("SERVER IS RUNNING ON THE PORT NO : 3000");
})