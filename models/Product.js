import mongoose from 'mongoose'
import shortid from 'shortid'
const {String, Number} = mongoose.Schema.Types
// passing object
const ProductSchema = new.mongoose.Schema({
    name: {
        type: String,
        required: True
    },
    price: {
        type: Number,
        required: True
    },
    sku: {
        type: String,
        unique: True,
        default: shortid.generate()
    },
    description: {
        type: String,
        required: True
    },
    mediaUrl: {
        type: String,
        required: True
    }

})