const model= require("../models");



function create_invoice(invoice){
    return new Promise(async(resolve,reject)=>{
        try{
            console.log("=====request received by invoice_ctrl====",invoice,
            "=====saving new invoice in db=====");
            let invoice_doc=model.invoice_mdl({

                ClientName:invoice.ClientName,
                ClientEmail:invoice.ClientEmail,
                ClientContact:invoice.ClientContact,
                ClientAddress:invoice.ClientAddress,
                ClientCity:invoice.ClientCity,
                Country:invoice.Country,
                Items:invoice.items,
                InvoiceStatus:invoice.InvoiceStatus,
                Amount_total:invoice.Amount_total,
                Billing_CoName:invoice.Billing_CoName,
                Billing_CoContacts:invoice.Billing_CoContacts,
                Billing_CoAddress:invoice.Billing_CoAddress,
                Billing_CoCity:invoice.Billing_CoCity,
                InvoiceDate:invoice.InvoiceDate,
                PaymentMethod:invoice.PaymentMethod,
                PaymentDueDate:invoice.PaymentDueDate
             });

             invoice_doc.save((err,doc) => {
                  if(err) return reject(err,console.log("==database error==="));
                    resolve(doc);
                });

        } catch(err){reject(err)};

 });

};

function get_invoice (invoice_id) {
   return new Promise(async function(resolve,reject){
       try{
           console.log("invoice identification",invoice_id)
         let doc = model.invoice_mdl.findOne({invoice_id:invoice_id})
//console.log("+++++document+++++",doc)
         doc.lean()
         doc.exec(function(err,record){
             console.log("record",record)
             if(err) {
                 return reject(err)
             }
             return resolve(record)
         })
       }catch(error){
           return reject(error)

       }
   })
}
 function list_invoices(){
     return new Promise(async(resolve,reject) =>{
         try{
             let doc = model.invoice_mdl.find()
             doc.lean()
             doc.exec((err,records)=>{
                 if(err) return reject(err)
                 return resolve(records)
             })
         }catch(err){
             return reject (err)
            }
     });
 }

 function edit_invoices(invoice_id,update){
     return new Promise(async(resolve,reject)=>{
         try{

             console.log(invoice_id)
             console.log(update)
             let updt =  {$set:update}
             let doc= model.invoice_mdl.findOneAndUpdate({invoice_id:invoice_id},updt,{new:true})
             doc.lean()
             doc.exec((err,records)=>{
                 if(err) return reject(err)
                 return resolve(records);
             });


         }catch(err){return reject (err)}

     });
 }

 function delete_invoice (invoice_id) {
    return new Promise(async function(resolve,reject){
        try{
          let doc =  model.invoice_mdl.deleteOne({invoice_id:invoice_id})
          doc.lean()
          doc.exec(function(err,record){
              if(err) {
                  return reject(err)
              }
              return resolve(record)
          })
        }catch(error){
            return reject(error)
 
        }
    })
 }


 function insert_invoice(invoice_id){
     return new Promise(async(resolve,reject)=>{

        try{

            let doc= await model.invoice_mdl.insertMany({invoice_id:invoice_id})
            doc.lean()
            doc.exec((err,doc)=>{
                if (err)return reject (err)
                return resolve(doc)
            })
        }catch(error){return reject (err)}})
 }
  //
  
module.exports={
     create_invoice:create_invoice,
     get_invoice:get_invoice,
     list_invoices:list_invoices,
     edit_invoices:edit_invoices,
     delete_invoice:delete_invoice,
     insert_invoice: insert_invoice,};
//how to use sort!!