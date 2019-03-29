let mongoose=require("mongoose");
let createcaseSchema=new mongoose.Schema({
    _id:Number,
    Name:String,
    Needed:Number,
    Department:String,
    Location:{
        city:String,
        street:String
    }
  

});




mongoose.model("Createcase",createcaseSchema) ;