const express= require ("express");
const routers= express.Router();
const srvs= require("../services");


//

routers.post ("/createorder",()=>{
    srvs.order_srv.create_order(req.body.data).then(result=>{
        res.status(200).send({
            correlationid:req.body.correlationid,
            message:"created successfully",
            order_id:result.order_id

        })

    }).catch(err=>res.status(500).send(err));
});

routers.post("/editorder",()=>{
    srvs.order_srv.edit_order(req.body.data).then(result=>{
        res.status(200).send({
            correlationid:req.body.correlationid,
            message:"successful",
            order_id:result.order_id
        })
    }).catch(err=>res.status(500).send(err));
});

routers.post("/getorderdetails",()=>{
    srvs.order_srv.getorder_details(req.body.data).then(result=>{
        res.status(200).send({
            correlationid:req.body.correlationid,
            message:"success success",
            order:result

        })
    }).catch(err=>res.status(500).send(err));
});

routers.post("/listorder",()=>{
srvs.order_srv.list_order(req.body.data).then(result=>{
    res.status(200).send({
        correlationid:req.body.correlationid,
        message:"list successful",
        order:result
    })
})
.catch(err=>res.status(500).send(err))
});


module.exports={routers};