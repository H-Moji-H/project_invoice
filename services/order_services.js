const ctrls=require("../controllers");



async function create_order(req){
    return new Promise(async(resolve,reject)=>{
        try{
            console.log(req,"==request received to create order");

            let order= await ctrls.order_ctrl.create_order(req);
             if (order){
                 console.log("order saved successfully");

             }return resolve (order);
        }catch(err){return reject (err)}
    });
};
//

async function edit_order(req){
    return new Promise(async(resolve,reject)=>{
        try{
            let doc=await ctrls.order_ctrl.edit_order(req.order_id,req.update)
            return resolve (doc)
        }
        catch(err){return reject (err)}
    })
}


async function getorder_details(req){
    return new Promise (async(resolve,reject)=>{
        try{
            let doc= await ctrls.order_ctrl.getorder_details(req.order_id);
            return resolve (doc);
        }catch(err){return reject (err)};
    });
};



async function list_order(req){
    return new Promise( async(resolve,reject)=>{
        try{
            let doc= await ctrls.order_ctrl.list_order(req.date);
            return resolve (doc)
        }catch(err){return reject (err)};
    });
};

module.exports={ 
    create_order,
    edit_order,
    getorder_details,
    list_order
}










//