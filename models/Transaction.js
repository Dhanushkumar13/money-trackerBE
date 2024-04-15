const  mongoose = require("mongoose");
const {Schema, model} = mongoose;
const TransationSchema = new Schema({
    name: {
        type: String,
    },
    price:{
        type: Number,
    },
    description: {
        type: String,
    },
    datetime: {
        type: Date,
    }

})

const TransationModel = model('Transaction', TransationSchema);

module.exports = TransationModel;