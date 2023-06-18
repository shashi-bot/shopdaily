const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
   userId:{ type: String, required:true},
   customerId:{ type: String},
   paymentIntentId:{type:String},
   products:[],
    amount:{type: Number, required:true},
    address:{type:Object,required:true},
  
    payment_status:{type:String,required:true},

},{timestamps:true});

module.exports = mongoose.model("order",OrderSchema);