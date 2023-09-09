const Brand = require("../models/brandModel");

const addBrand = async (req, res) => {
    // console.log(req.user)

    try {

        const newBrand = new Brand ({
            brandName: req.body.brandName,
            status: req.body.status
        })

        //check if the user is an Admin
        const admin = req.user.isAdmin;
        if(!admin) {
            return res.status(400).send({msg: "User must be an admin to add a brand!"})
        }

        //check if the same brand exists
        const existingBrand = await Brand.findOne({brandName: req.body.brandName});

        if(existingBrand) {
            return res.status(400).send({msg: "Brand Already Exists!"})
        }

    
        await newBrand.save();
        const {brandName, status} = newBrand._doc;
        res.status(200).send({brandName, status})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
        
    }

}

const editBrand = async(req,res) => {
    try {
        //check if the user is an Admin
        const admin = req.user.isAdmin;
        if(!admin) {
            return res.status(400).send({msg: "User must be an admin to update a brand!"})
        }

        const updatedBrand = await Brand.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.status(200).json(updatedBrand)
        
    } catch (error) {
        console.log(error);
        return res.send(500).json(error);
    }
}

const deleteBrand = async(req,res) =>{
    try {
     //check if the user is an Admin
     const admin = req.user.isAdmin;
     if(!admin) {
         return res.status(400).send({msg: "User must be an admin to update a brand!"})
     }
     
     await Brand.findByIdAndDelete(req.params.id);
     res.status(200).json({msg: "Brand Deleted!"})
        
    } catch (error) {
        console.log(error);
        return res.send(500).json(error)
        
    }
}

const getAllBrands = async(req,res) => {
    try {
        const allBrands = await Brand.find({status: "Active"});
        res.status(200).json(allBrands)
        
    } catch (error) {
        console.log(error);
        return res.send(500).json(error);
        
    }
}

module.exports = {addBrand, editBrand, deleteBrand, getAllBrands}