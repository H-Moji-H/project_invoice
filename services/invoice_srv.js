const ctrl=require("../controllers");

async function create_invoice(req){
return new Promise(async(resolve,reject)=>{
try{
    console.log(req,"request received to add invoice service successfully");

    let invoice=await ctrl.invoice_ctrl.create_invoice(req);
    if(invoice){
        console.log(`====invoice saved successfully==${invoice}`)
    }
return resolve (invoice);
}
catch(err){
    console.log("===srv erroor===",err,"==srv error===")
    return reject (err)
}
});
}
async function get_invoice(req){
    return new Promise(async(resolve,reject)=>{
    try{
    
        let invoice= await ctrl.invoice_ctrl.get_invoice(req.invoice_id);
    
    return resolve (invoice); 
    }
    catch(err){
        console.log("===srv erroor===",err,"==srv error===")
        return reject (err)
    }
    });
}

async function edit_invoices (req) {
    return new Promise( async function(resolve,reject){
try {
    console.log("++++edit srv req payload++++",req)
    let invoice = await ctrl.invoice_ctrl.get_invoice(req.invoice_id);
    if(invoice){
        console.log("++++invoice validation success",invoice.invoice_id)
    }
    let doc  = await ctrl.invoice_ctrl.edit_invoices(invoice.invoice_id,req.update) 
      console.log("===edit srv response===",doc)
    return resolve (doc) 
    
} catch (error) {
    return reject(error)
}
    })
}
    
async function list_invoices(req){

    return new Promise(async(resolve, reject)=>{
        try{
            let doc= await ctrl.invoice_ctrl.list_invoices()
            console.log(doc)
            return resolve (doc)
        }catch(err){return reject (err)}

    })
}

async function delete_invoice(req){
    return new Promise( async(resolve, reject)=>{
        try{
            let doc= await ctrl.invoice_ctrl.delete_invoice(req.invoice_id)
            return resolve(doc)

        }catch(err){return reject(err)}
    })
}

async function insert_invoice(req){
    return new Promise(async(resolve,reject)=>{
        try{
            let doc=await ctrl.invoice_ctrl.insert_invoice(req.invoice_id,req.insert)
            return resolve(doc)
        }catch(err){return reject(err)}
    })
}

module.exports={
   create_invoice,
   get_invoice,
   edit_invoices,
   list_invoices,
   delete_invoice,
   insert_invoice
}