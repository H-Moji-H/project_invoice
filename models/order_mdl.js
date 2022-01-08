const mongoose= require("mongoose");
const Schema= mongoose.Schema;
const AutoIncrement=require("mongoose-sequence")(mongoose);
//const Autogenarate= require("sequelize-auto");

const orderSchema= new Schema({
    order_id:{type:String},
    order_ref:{type:String,required:true,unique:true},
    order_details:[{
        name:String,
        quantity:Number,
        amount:Number,
        currency:String
    }]
})
//orderSchema.plugin(Autogenarate,{inc_field:"order-id"})
orderSchema.plugin(AutoIncrement,{inc_field:"order_id"});

module.exports= mongoose.model("order",orderSchema)












//