const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name:{type:String, required: true}, 
    country:{type:String},
    src:{type:String, required: true},
    description:{type: String}
})

const City = mongoose.model("city", citySchema )

module.exports = City;

