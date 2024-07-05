const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://kumarprince7999:A2xaDRWxdkQHdVTu@cluster0.w9y3bag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
console.log('db connected')
}).catch((err) => {
    console.log("failes");
});


app.listen(8086,() => {
    console.log("server started")});

    //Product Schema

    const productSchema = new mongoose.Schema({
        product_name : {
            type : String,
            required : true
        },
        product_price : {
            type : String,
            required : true
        },
        isInStock : {
            type : Boolean,
            required : true
        },
        Category:{
            type : String,
            required : true
        }
        
    })


    const productModel = mongoose.model('product',productSchema);

    // create

    app.post('/api/products', async(req,res) => {
        
        const product = productModel.create({
            product_name : req.body.product_name,
            product_price : req.body.product_price,
            isInStock : req.body.isInStock,
            Category : req.body.Category
        })
        console.log(product);
        return res.status(201).json({message : "Product Created"});
    })

