let mongoose=require("mongoose");



// Review the names of the refs ????
let DonationSchema=new mongoose.Schema({
    _id:Number,
    Donation_Date: {type: String},   // Date ??
    
    Donor:{
        type:Number,
        ref:"Donor"
    },
    Patient:{
        type:Number,
        ref:"Patient"
    },
    Hospital:{
        type:Number,
        ref:"hospital"
    }

});


mongoose.model("Donation",DonationSchema); 