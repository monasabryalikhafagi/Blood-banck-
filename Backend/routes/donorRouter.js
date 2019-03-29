let express=require("express"),
donorRouter=express.Router(),
path=require("path"),
mongoose=require("mongoose");


require("../models/donorsModel");

let DonorSchema=mongoose.model("Donor");
donorRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

donorRouter.get("/list",(request,response)=>{
    console.log("hi from donor router get list")

    DonorSchema.find({},(error,result)=>{
        if(!error)
     
        response.render("donors/donorlist",{Donors:result});

})
});

donorRouter.get("/add",(request,response)=>{
    console.log("hi from donor router get add")

    // response.send("GETADD");
    response.render("donors/adddonor");
 })
 
 



donorRouter.post("/add",(request,response)=>{
    console.log("jjj");
    let donate=new DonorSchema({
        _id:request.body._id,
        Name:request.body.Name,
        Gender:request.body.Gender,
        Age:request.body.Age,
        ["Address.city"]:request.body.city,
        ["Address.street"]:request.body.street,
        ["Contact.phone"]:request.body.phone,
        ["Contact.facebook"]:request.body.facebook,

        LastDonation:request.body.LastDonation,
        
        // phone:request.body.Contact.phone,
        // facebook:request.body.Contact.facebook,
        
        BloodGroup:request.body.BloodGroup
       
        
    });
    donate.save((error)=>{
        if(!error)
        console.log("list");
        response.redirect("/donors/list");
    });
})
donorRouter.get("/list",(request,response)=>{

    console.log("hi from donor router get list")

        DonorSchema.find({},(error,result)=>{
            response.render("donors/donorlist",{Donors:result});
        })
        

    })


    donorRouter.get("/edit/:id",(request,response)=>{
        DonorSchema.findOne({_id:request.params.id},(error,result)=>{
            console.log(error);
            response.render("donors/editdonor",{Donors:result})
    
        });
    })

  


    donorRouter.post("/edit/:id",(request,response)=>{
    
        DonorSchema.update({_id:request.params.id},{
            "$set":{
                Name:request.body.Name,
                Gender:request.body.Gender,
                Age:request.body.Age,
                 ["Address.city"]:request.body.Address.city,
                 ["Address.street"]:request.body.street,
                 ["Contact.phone"]:request.body.phone,
                 ["Contact.facebook"]:request.body.facebook,
        
                LastDonation:request.body.LastDonation,
                
                BloodGroup:request.body.BloodGroup
               
               
               
            }
        },(error)=>{
            if(!error)
            {
                response.redirect("/donors/list");
            }
            else{
                console.log(error);
            }
        })
    
    
    })


    donorRouter.get("/delete/:id",(request,response)=>{
        DonorSchema.deleteOne({_id:request.params.id},(error)=>{
            if(!error)
            response.redirect("/donors/list");
        })
    });


module.exports=donorRouter;
