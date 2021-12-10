const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add product name']
    },
    quantity: {
        type: Number,
        required: [true, 'Please add quantity']
    },
    price: {
        type: Number,
        required: [true, 'Please add price for single item']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Product', ProductSchema)