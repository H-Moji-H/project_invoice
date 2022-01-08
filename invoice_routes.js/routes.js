const express= require("express");
const router= express.Router();
const srv=require("../services");

router.post("/invoice_admin",(req,res)=>{
    console.log(req.body);
    srv.invoice_srv.invoice_admin(req.body.data).then((result)=>
    res.status(200).send({
        correlationid:req.body.data.correlationid,
        message:"saved successfully",
        invoice_admin:`${result.invoice_admin}`
    })).catch(err=>res.status(500).send(err));
});


router.post("/createinvoice",(req,res) => {
    srv.invoice_srv.create_invoice(req.body.data).then((result)=> 
        res.status(200).send({
            correlationid:req.body.data.correlationid,
            message : "success",
            invoice_id:result.invoice_id
        })).catch(err=>res.status(500).send(err));
})
router.post("/getinvoice",(req,res) => {
    srv.invoice_srv.get_invoice(req.body.data).then((result)=> 
        res.status(200).send({
            correlationid:req.body.data.correlationid,
            message : "success",
            invoice : result
        })).catch(err=>res.status(500).send(err));
})
router.post ("/deleteinvoice",(req,res)=>{
    srv.invoice_srv.delete_invoice(req.body.data).then((result)=>{
        res.status(200).send({
            correlationid:req.body.data.correlationid,
            message : "request successful",
            invoice : result
        })
    }).catch(err=>res.status(500).send(err))
})

router.post("/editinvoices",(req,res)=>{
    srv.invoice_srv.edit_invoices(req.body.data).then((result)=>{
        res.status(200).send({
            correlationid:req.body.data.correlationid,
            message : "request successful",
            invoice : result,

        });
    }).catch(err=>res.status(500).send(err))
})

router.post("/listinvoices",(req,res)=>{
    srv.invoice_srv.list_invoices(req.body.data).then((result)=>{
        res.status(200).send({
            correlationid:req.body.data.correlationid,
            message : "request successful",
            invoice : result

        })
    }).catch(err=>res.status(500).send(err))
})
module.exports=router;

//Haven't figured out yet

//const express=require('express');
//const router=express.Router();

//const services=require('../services');
//const models = require('../models');

//router.post('/invoice',(req,res)=>{
   // console.log(req.body);
   // srv.invoice_srv.invoice_admin(req.body.data).then(result=>res.statsu(200).send
   // ({correlationid:req.body.data,})).catch(err=>res.staus(500).send (err))
//})
//models.exports=router;