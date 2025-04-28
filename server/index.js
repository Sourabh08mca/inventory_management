const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProductModel = require('./models/Products')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Inventory_Management")

app.post('/form' ,(req,res) => {
    ProductModel.create(req.body)
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.get('/', (req,res) => {
    ProductModel.find({})
    .then(product => res.json(product))
    .catch(err => res.json(err))
})

app.get('/getUser/:id',(req, res) => {
    const id = req.params.id;
    ProductModel.findById({_id:id})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req,res) => {
    const id = req.params.id;
    ProductModel.findByIdAndUpdate({_id:id},{name: req.body.name, 
        quantity: req.body.quantity, 
        price: req.body.price})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req,res) =>{
    const id = req.params.id;
    ProductModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001, (req, res) => {
    console.log("Server is Running")

})