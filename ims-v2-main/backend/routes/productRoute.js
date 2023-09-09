const express = require('express');
const {addProduct, deleteProduct, editProduct, getAllProducts} = require("../controllers/productController")
const {verifyAdmin} = require("../middlewares/authMiddleware")

const router = express.Router();


router.post("/addProduct", verifyAdmin, addProduct);
router.get("/allProducts", verifyAdmin, getAllProducts);
router.put("/updateProduct/:id", verifyAdmin, editProduct);
router.delete("/deleteProduct/:id", verifyAdmin, deleteProduct);


module.exports = router;