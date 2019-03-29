let express=require("express"),
donorUserRouter=express.Router(),
path=require("path"),
mongoose=require("mongoose");
bodyParser=require("body-parser"),

require("../models/donorsModel");

let DonorSchema=mongoose.model("Donor");

require("../Models/usersModel")

let usersSchema=mongoose.model("Users");


donorUserRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// donorUserRouter.get("/login/:id?",(request,response)=>{
//     response.render("donorUser/login")

// })

// donorUserRouter.post("/login/:id?",(request,response)=>{

      
//         response.redirect("/donorUser/profile");
        


   

// })


donorUserRouter.get("/profile/:id?",(request,response)=>{
    response.render("donorUser/profile")

})



donorUserRouter.get("/register",(request,response)=>{
    
    // response.send("GETADD");
    response.render("donorUser/register");
 })


 donorUserRouter.post("/register",(request,response)=>{
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
      
        BloodGroup:request.body.BloodGroup,
        UserName:request.body.UserName,
         Password:request.body.Password
    

       
        
    });
    donate.save((error)=>{
        if(!error)
      
        response.redirect("/donorUser/login");
    });

  //------------------ USERS ----------------------
  let user=new usersSchema({
    _id:request.body._id,
    username:request.body.UserName,
    password:request.body.password,
    type:"donorUser"
        });

        response.locals.usersSchema = user;
      user.save((er)=>{
        if(!er)
        console.log("user saved !!!");
      });

});
donorUserRouter.get("/list" ,function(req, res) {
    
    DonorSchema.find({},(error,result)=>{
    if(!error){
    
      res.send(result);
      
    }else{
      console.log(error);
    }
    }
    )
    });

donorUserRouter.get("/details/:id",(request,response)=>{
    DonorSchema.findOne({_id:request.params.id},(error,result)=>{

        if(!error)
            response.send(result)
        else
            response.send(error);
        
       

    });
})
donorUserRouter.get("/delete/:id",(request,response)=>{
    DonorSchema.deleteOne({_id:request.params.id},(error,result)=>{
        if(!error)
        //response.redirect("/donorUser/profile/:id");
        response.send(result)
    })
});

donorUserRouter.get("/edit/:id",(request,response)=>{
    DonorSchema.findOne({_id:request.params.id},(error,result)=>{
        console.log(error);
        response.render("donors/editdonor",{Donors:result})

    });
})




donorUserRouter.post("/edit/:id",(request,response)=>{

    DonorSchema.update({_id:request.params.id},{
        "$set":{
            Name:request.body.Name,
            Gender:request.body.Gender,
            Age:request.body.Age,
             ["Address.city"]:request.body.Address.city,
             ["Address.street"]:request.body.Address.street,
             ["Contact.phone"]:request.body.Contact.phone,
             ["Contact.facebook"]:request.body.Contact.facebook,
    
            LastDonation:request.body.LastDonation,
            
            BloodGroup:request.body.BloodGroup
           
           
           
        }
    },(error,result)=>{
        if(!error)
        {
            //response.redirect("/donorUser/list");
            console.log(result)
            response.send(result)
        }
        else{
            console.log(error);
        }
    })


})



module.exports=donorUserRouter;