const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

app.listen(port,function(){
    console.log("Started Server Port: 3000")
})
var items = []
app.get("/",function(req,res){
    var today = new Date()
    var option = {weekday:"long",day:"numeric",month:"long"}
    var date = today.toLocaleDateString("en-US",option)
    res.render("list",{date:date,task:items})
})

app.post("/", function(req,res){
    var task = req.body.list
    items.push(task)
    res.redirect("/")
})