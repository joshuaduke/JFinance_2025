import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter transaction name"],
    },
    category: {
        type: String,
        require: true,
    },
    date: {type: Date, default: Date.now},

})