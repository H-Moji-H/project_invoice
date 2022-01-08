
const express = require ("express");

const app = express();
const port = 3000

require("./db")();

const morgan=require("morgan");

const invoice_route=require("./invoice_routes.js/routes");
const order_routes=require("./invoice_routes.js/index")

//console.log("routes served",invoice_route)
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api",invoice_route);
app.use("/api",order_routes.order_rts);

app.listen(3000,()=>{console.log("app listening on "+ port)});


//
