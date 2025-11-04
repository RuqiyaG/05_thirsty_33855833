const express = require("express");
const router = express.Router();

var shopData = {shopName: "The Thirsty Student"};

router.get("/", function(req, res) {
    console.log(shopData);
    res.render("index.ejs", shopData);
});

router.get("/about",(req,res)=>{
    res.render("about.ejs")
});

router.get("/search",(req,res)=>{
    res.render("search.ejs")
});

router.get("/test", (req, res) => {
    res.send("Test route is working!");
});


module.exports = router