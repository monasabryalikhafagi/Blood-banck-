let mongoose=require("mongoose");


let usersSchema=new mongoose.Schema({
    _id:Number,
   username:String,
   password:String,
   type:String ,   // Components Name to route using it 
});




mongoose.model("Users",usersSchema ) ;