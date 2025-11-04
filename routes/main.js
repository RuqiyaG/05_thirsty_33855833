const express = require("express"); // this imports the express module and makes the router object
const router = express.Router();

// defines and assigns shop name so that it can be used anyhwere in my html code
var shopData = {shopName: "The Thirsty Student", productCategories:["Beer", "Wine", "Soft Drink", "Milkshake", "Hot Drinks" ]};

// My route handlers so that each path is made and can be accesed
router.get("/", function(req, res) {
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

//this exports the router object so other files can use it
module.exports = router