const express = require("express"); // this imports the express module and makes the router object
const router = express.Router();

// defines and assigns shop name so that it can be used anyhwere in my html code
var shopData = {shopName: "The Thirsty Student", productCategories:["Beer", "Wine", "Soft Drinks", "Milkshake", "Hot Drinks" ]};

// My route handlers so that each path is made and can be accesed
router.get("/", function(req, res) {
    res.render("index.ejs", shopData);
});

router.get("/about",(req,res)=>{
    res.render("about.ejs");
});

router.get("/search",(req,res)=>{
    res.render("search.ejs");
});

router.get("/search_result",function (req, res) {  //this will search the database for the item
    res.send("You searched for  "+req.query.search_text+" in  "+req.query.category);
});

router.get("/register",(req,res)=>{
    res.render("register.ejs", shopData);
});

router.post("/registered",(req,res)=>{
    res.send('Hello    '+req.body.first +'  '+req.body.last+'    you are registered!');
});

router.get("/survey",(req,res)=>{
    res.render("survey.ejs",shopData);
});

router.post("/surveyquestion",(req,res)=>{
    res.send("Thank you for submitting! :) ");
});

//this exports the router object so other files can use it
module.exports = router