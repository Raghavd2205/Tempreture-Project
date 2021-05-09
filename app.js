const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render('index.hbs');
});
app.get("*",(req,res)=>{
    
   res.write("erroe!!");
});
app.listen(8090,()=>{
    console.log("listen");
});