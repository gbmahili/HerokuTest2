var express = require("express");
var app = express();
var PORT = 3030;

app.get("/", function(req, res){
    console.log("Baraka");
    res.json({name:"Baraka"});
})

app.listen(PORT, function(){
    console.log("Listening to 3030");
});