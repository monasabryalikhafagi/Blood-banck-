var mongoose=require("mongoose");
var hospitalschema=new mongoose.Schema(
    {
        _id:Number,
        Name:String,
        Password:String,
        Location:{
            city:String,
            street:String,
        },
        Email:String,
        Department:String
    }
)
mongoose.model('Hospitals',hospitalschema);