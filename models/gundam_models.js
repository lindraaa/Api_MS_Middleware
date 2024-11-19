const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const GundamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['HG','NG','PG','SD','RG'],  
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model("Gundam", GundamSchema)