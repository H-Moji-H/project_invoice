const order_modls=require("../models");
//const model= require("../models");


function create_order(order){
    return new Promise(async(resolve,reject)=>{

    try{
        console.log("==request received to create new order",order,"==saving new oder==");
        let order_doc=order_modls.order_mdl({
            order_id:order.order_id,
        
            order_ref:order.order_ref,

            order_details:order.order_details
        });
        order_doc.save((err,doc)=>{
            if (err) return reject(err,console.log("..db err"));
            return resolve(doc)
        })
    }catch(err){return reject(err)}    
    });
};





function edit_order(order_id,update){
    return new Promise(async(resolve,reject)=>{
        try{
            let updt={$set:update};
            let order_doc= order_modls.order_mdl.updateOne({order_id:order_id},updt,{new:true})
            order_doc.lean()
            order_doc.exec((err,records)=>{
                if (err) return reject (err)
                return resolve (records);
            })




        }catch(err){return reject(err)};

    });
};

function getorder_details(order_id){
    return new Promise(async(resolve,reject)=>{
        try{
            let doc= order_modls.order_mdl.find({order_id:order_id});
            doc.lean()
            doc.exec((err,doc)=>{
                if (err) return reject (err)
                resolve(doc)
            })

        }catch(err){return reject (err)}
    })
}
 function list_order(){
     //how to list order by date?
     return new Promise(async(resolve,reject)=>{
         try{

            let doc= order_modls.order_mdl.find();
            doc.lean()
            doc.exec((err,doc)=>{
                if (err) return reject (err)
                return resolve (doc);
            });
            
         }catch(err){return reject (err)}
     }
     )
 };
module.exports={
    create_order:create_order,
    edit_order: edit_order,
    getorder_details: getorder_details,
    list_order: list_order
}