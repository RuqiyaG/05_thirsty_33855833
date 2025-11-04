var express = require("express")
var ejs = require("ejs")

const app = express()
const port = 8000

app.set("view engine","ejs");

const mainRoutes = require("./routes/main");
app.use("/",mainRoutes);

app.listen(port,()=> console.log(`Thirsty app listening on port ${port}!`))
