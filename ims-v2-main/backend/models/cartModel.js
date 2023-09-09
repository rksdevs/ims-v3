const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    products: [
        {
            productId: {
                // type: String,
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            }
        }
    ]
}, {timestamps: true})

module.exports = mongoose.model("Cart", cartSchema);