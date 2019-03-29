let mongoose=require("mongoose");
let patientSchema=new mongoose.Schema({
    _id:Number,
    PName:String,
    Blood_group:String,

    Connection_way:{
        Phonenumber:Number,
        Facebook:String,    
    },
   Age:Number,
   Gender:String,
   Location:{
       City:String,
       Street:String
   },
   Username:String,
   Password:String,
//    Donors:[{
//     type:Number,
//     ref:"Donor"
// }]



});




mongoose.model("Patient",patientSchema) ;