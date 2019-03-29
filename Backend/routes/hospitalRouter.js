var express = require('express');
var router = express.Router();
path=require("path"),
mongoose=require("mongoose");
fs=require("fs");

require("../Models/HospitalModel")
require("../Models/usersModel")

let hospitalSchema=mongoose.model("Hospitals");
let usersSchema=mongoose.model("Users");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* AddHospital Get */
router.get("/add",(request,response)=>{
  console.log("hello from add hospital");
  response.render("hospitals/addHospital");
    // Done 
});


/* AddHospital Post */
router.post("/add",(request,response)=>{
  console.log("post hospital")
  let Hospital=new hospitalSchema({
      _id:request.body.ID,
      Password:request.body.Password,
      Name:request.body.Name,
      Email:request.body.Email,
      ["Location.city"]:request.body.city,
      ["Location.street"]:request.body.street,
      Department:request.body.Department
      
  });
  
  Hospital.save((error)=>{
      if(!error){
        console.log("result");
      res.redirect("/hospitals/list");} else{console.log(error);}
  });
});// post add


//-------------------------------------------------------------------------------

/***Register  */

/* AddHospital Get */
router.get("/register/:id?",(request,response)=>{
  console.log("hi from get hospital reister")
  console.log(request.url);
 //response.send(request.url)
  response.render("hospitals/addHospital");  // Done 
});


/* AddHospital Post */
router.post("/register",(request,response)=>{
  console.log("From post register")
  let Hospital=new hospitalSchema({
      _id:request.body._id,
      Password:request.body.Password,
      Name:request.body.Name,
      Email:request.body.Email,
      ["Location.city"]:request.body.City,
      ["Location.street"]:request.body.Street,
      Department:request.body.Department    
  });
  
  Hospital.save((error)=>{
      if(!error){
        console.log("From post hospital register")
     response.redirect("/hospitals/login");} else{console.log(error);
      }
  });

       //------------------ USERS ----------------------
       let user=new usersSchema({
       _id:request.body._id,
        username:request.body.Name,
        password:request.body.Password,
        type:"hospitals"
            });

            response.locals.usersSchema = user;
          user.save((er)=>{
            if(!er)
            console.log("user saved !!!");
          });  
});

  //===============

  
router.get("/details/:id",(request,response)=>{
  hospitalSchema.findOne({_id:request.params.id},(error,result)=>{
      if(!error){
        console.log("Done details")
        console.log(result)
        response.send(result)
        }
          else
          response.send(error);
      
     

  });
}) 

 //search hospital by city
 router.get("/searchbycity/:city",(request,response)=>{
  let city = request.params.city;
  hospitalSchema.find({"Location.city":city},(error,result)=>{
      if(!error){
           console.log(result)
          response.send(result);       
      }
      

})
});


router.post("/searchbycity",(request,response)=>{
  let city = request.body.query
  hospitalSchema.find({"Location.city":city},(error,result)=>{
      if(!error){
        console.log(result)
        response.send(result);
      }
      

})
});


/* listHospital get */

router.get("/list",(request,response)=>{
  console.log("hi from hospital list")
  hospitalSchema.find({},(err , result)=>{ 
    if(!err){
      console.log(result);
      response.send(result);
    }else{
      console.log(err);
      response.send(err);
    }
 

})
});


/* deletetHospital get */

router.get("/delete/:id",(request,response)=>{
  hospitalSchema.deleteOne({_id:request.params.id},(error)=>{
      if(!error)
      response.redirect("/Hospitals/listHospital");
  })
});





module.exports = router;

