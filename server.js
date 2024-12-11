const express = require("express");
const app = express();
const db = require('./db');
require('dotenv').config();

const PORT=process.env.PORT || 3000


const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("THIS IS MY HOME PAGE.");
})



const personRouter = require("./routes/personRoutes");
app.use('/person', personRouter);


const menuRouter = require("./routes/menuRoutes");
app.use('/menu', menuRouter);


app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON THE PORT NO : ${PORT}`);
})