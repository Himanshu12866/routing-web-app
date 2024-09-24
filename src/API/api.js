

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const app = express()

app.get("/" , (req ,res) => {
    res.send("<h1>Welcome to the Fashion Home</h1>")
    res.end()
});
app.get("/men" , (req,res) => {
    res.send("<h1>Men's Fashion</h1>")
    res.end()
})

app.get("/products" , (req,res) => {
    MongoClient.connect(url).then(
        clientObj => {
            const db = clientObj.db("admin")
            db.collection("products").find({}).toArray().then(document => {
                res.send(document)
                res.end()
            })
        }
    )
})
app.get("/products/:id" ,( req,res) => {
 
    MongoClient.connect(url).then(clientObj => {
        const db = clientObj.db("admin")
        db.collection("products").find({categories: req.params.id }).toArray().then(document => {
            res.send(document)
            res.end()
        })
    })
})


app.listen(5500)
console.log("Server Started at http://127.0.0.1:5500")