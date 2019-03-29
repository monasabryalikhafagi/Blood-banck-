let mongoose=require("mongoose");
let caseSchema=new mongoose.Schema({
    _id:Number,
    Name:String,
    Needed:Number,
    Department:String,
    Location:{
        city:String,
        street:String
    }
});


//mapping
mongoose.model("Cases",caseSchema );