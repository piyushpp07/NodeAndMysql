const connection = require('../connection')

//we can have results.affectedRows in order to check if row is affected
const createProduct = (req, res, next) => {
   let product = req.body
   query =
      "insert into product (name ,description,price) values (?,?,?   )"
   connection.query(query, [product.name, product.description, product.price],
      (err, results) => {
         if (!err) {
            return res.status(200).json({ message: "Product Added Successfully" })
         }
         else {
            return res.status(500).json({ message: "failed" })
         }
      });
   //format query , [data] , callback
}

const getAll = (req, res, next) => {
   query =
      "select * from product"
   connection.query(query,
      (err, results) => {
         if (!err) {
            return res.status(200).json({ message: "Product Added Successfully", "products": results })
         }
         else {
            return res.status(500).json({ message: "failed" })
         }
      });
   //format query , [data] , callback
}

const updateOne = (req, res, next) => {
   let { id } = req.params
   let product = req.body
   query =
      "update product set name = ?,description = ? ,price = ? where id = ?"
   connection.query(query, [product.name, product.description, product.price, id],
      (err, results) => {
         if (!err) {
            return res.status(200).json({ message: "Product Updated Successfully" })
         }
         else {
            return res.status(500).json({ message: "failed to update" })
         }
      });
   //format query , [data] , callback
}

const deleteOne = (req, res) => {
   let { id } = req.params
   let query = "delete from product where id = ?"
   connection.query(query, [id], (err, result) => {
      if (err)
         res.status(404).json({ message: "User not found" });
      else
         res.status(200).json({ message: "user deleted Successfully" })
   })
}

module.exports = { createProduct, deleteOne, updateOne, getAll };