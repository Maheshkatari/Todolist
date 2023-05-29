const express = require("express");
const bodyparser =require("body-parser");

const app = express();
app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

var items =["Books","food","gym"];

app.get("/",(req,res)=>{

    var today =new Date();

    var options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day =today.toLocaleDateString("en-US",options);
    
    res.render("list",{kindofDay:day,newListitem:items});


});

app.post("/",(req,res)=>{

    const item=req.body.lists;
    items.push(item);
    res.redirect("/");

});

app.listen(3000,()=>{
    console.log("star the 3000 port");
});