let mongoose=require("mongoose");
let DonorSchema=new mongoose.Schema({
   _id:Number,
   Name:String,
    Age:Number,
    Gender:String,
    BloodGroup:String,
    Contact:{phone:Number,facebook:String},
    Address:{city:String,street:Number},
    LastDonation:Date,
    UserName:String,
    Password:Number
    



});
//mapping
mongoose.model("Donor",DonorSchema);