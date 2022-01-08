const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const AutoIncrement=require("mongoose-sequence")(mongoose);
const AutoGenerate= require("auto-generate");

const invoiceSchema=new Schema({
    ClientName:{type:String,required:true},
    ClientEmail:{type:String,required:true,unique:true},
    ClientContact:{type:String,required:true},
    ClientAddress:{type:String,required:true},
    ClientCity:{type:String,required:true},
    Country:{type:String,required:true},
    Items:[{
        ItemName:String,
        quantity:Number,
        amount:Number
   }],
    InvoiceStatus:{type:String,default:"Created:Pending"},
    Amount_total:Number,
    Billing_CoName:{type:String,required:true},
    Billing_CoContacts:{type:String,required:true},
    Billing_CoAddress:{type:String,required:true},
    Billing_CoCity:{type:String,required:true},
    InvoiceDate:{type:String,default:new Date().toISOString()},
    PaymentMethod:{type:String},
   PaymentDueDate:String


});
invoiceSchema.plugin(AutoIncrement,{inc_field:"invoice_id"});










//var order_mdl=mongoose.model("order",orderSchema);
var invoice_mdl=mongoose.model("invoice",invoiceSchema);
//module.exports=mongoose.model("invoice",invoiceSchema);
module.exports={
    invoice_mdl:invoice_mdl,
    //order_mdl:order_mdl
}

//
