const express = require("express");
const app = express();


app.get("/books",allbooks,(req,res) => { 
    res.send({
        Book1 : "You Don't Know Javascript",
        Book2: "Head First Java",
    })
})

function allbooks(req,res,next){
    console.log ( "Fetching all books");
    next();
}

app.get("/books/:name",singlebook,(req,res) => { 
    res.send({
        bookName: req.name,
    })
})

function singlebook(req,res,next){
    req.name = req.params.name
    next();
}

app.listen(8060, () => {
    console.log("listening port 8060");
})