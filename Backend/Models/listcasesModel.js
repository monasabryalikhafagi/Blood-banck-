let mongoose=require("mongoose");
let ListcasesSchema=new mongoose.Schema({
 //_id:Number,
    // Location:String,
    Location:{
        city:String,
        street:String
    },
    Needed:Number,
    Numberofacces:[],
    Department:String,
    Donors:[{
        type:Number,
        ref:"Donor"
    }],
    case:[{
        type:Number,
        ref:"Createcase"
    }],
    Donorreply:Number,

});




mongoose.model("Listcases",ListcasesSchema) ;