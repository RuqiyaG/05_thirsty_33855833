// imports modules needed to make the app
var express = require("express")
var ejs = require("ejs")

 // creates the app and sets up the port for the local host so you can see the requests sent
const app = express()
const port = 8000

app.set("view engine","ejs");

app.use(express.urlencoded({extended: true})); // body parser to help handle form sumbissions

//imports my routes from main.js and allows it to be used in my thirsty app
const mainRoutes = require("./routes/main");
app.use("/",mainRoutes);

//starts the server and confirms that it is listening on the correct port
app.listen(port,()=> console.log(`Thirsty app listening on port ${port}!`))
