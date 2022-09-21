const express = require('express');

const connection = require('../connection')

const router = express.Router()

const { createProduct, deleteOne, updateOne, getAll } = require('../controller/productFxn')

router.post('/create', createProduct)
router.get('/', getAll)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)


module.exports = router;