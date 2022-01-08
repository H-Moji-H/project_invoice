const mongoose=require("mongoose");
require("dotenv/config");

module.exports=()=>{
    mongoose.connect("mongodb+srv://Harry:Harry123!@harrydb.zckb8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
       //
    }).then(()=>console.log("DB Connection successful")).
    catch((err)=>console.log(err));
}


//
//mongoose.connect('mongodb://localhost:27017',{useMongoClient:true}).
//then(db=>console.log('Mongo connected')
//).catch(err=>console.log(err));

//const mongoose= require('mongoose');


//

