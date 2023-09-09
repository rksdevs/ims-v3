const Product = require("../models/productModel");
const Brand = require("../models/brandModel");
// const Category = require("../models/categoryModel");
// const Attributes = require("../models/attributeModel");

//add product

const addProduct = async(req, res) => {
    try {
       
        //verify admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized!"});
        }

        const {productName, image, size, color, quantity, price, description, brand, category} = req.body;

        //status verification
        const brandStatus = await Brand.findOne({_id: brand, status: "Active"});

        if(!brandStatus) {
            return res.status(400).json({msg: "Brand is not available!"});
        }



        const newProduct = new Product({
            productName: productName,
            image: image,
            size: size,
            quantity: quantity,
            price: price,
            description: description,
            brand: brand,
            category: category,
            color: color
        })

        await newProduct.save();
        res.status(200).json(newProduct);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }
}

//delete product

const deleteProduct = async(req,res) => {
    try {
        //verify admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized!"});
        } 
        
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: "Product deleted!"})

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }
}

//update product

const editProduct = async(req,res) => {
    try {
        //verify admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized!"});
        } 
        
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json(updatedProduct)

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }
}

//get all products

const getAllProducts = async(req,res) => {
    try {
      //verify admin
      const verifyAdmin = req.user.isAdmin;
      if(!verifyAdmin) {
          return res.status(400).json({msg: "Unauthorized!"});
      };
      
    //   const allProducts = await Product.find();
    //   res.status(200).json(allProducts);
    
    let products;
    const qNewest = req.query.newest;
    const qCategory = req.query.category;
    const qBrand = req.query.brand;

    if(qNewest) {
        products = await Product.find().sort({createdAt: -1}).limit(1);
    } else if (qCategory) {
        products = await Product.find({
            category: {
                $in: [qCategory],
            }
        })
    } else if (qBrand) {
        products = await Product.find({qBrand})
    } else {
        products = await Product.find();
    }

    res.status(200).json(products);
     
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }
}

module.exports = {addProduct, deleteProduct, editProduct, getAllProducts}