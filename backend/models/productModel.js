import mongoose from "mongoose"
import { Schema } from "mongoose"

// creating the object
const ProductSChema= new Schema({
    // Structure of User resource
    productId: {
        type: Number,
        required: [true, "ProductId is required"],
        
    },
    productName: {
        type: String,
        required: [true, "ProductName is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minNumber: [10000, "Min price of product  is 10000"],
        maxNumber: [50000, "Max price of product is 50000"]

    },
    brand: {
        type: String,
        required:[true,"brand is required"]
    },
},
    {
        versionKey: false,
        Timestamp: true,

    }
)
// generate UserModel
export const UserModel = mongoose.model("product", ProductSChema)

