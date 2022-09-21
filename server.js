const express = require('express');

const connection = require('./connection');

const productRoute = require('./routes/product');

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use('/product', productRoute);

app.listen(5000, () => { console.log("app listening at 5000") })
