

let express = require('express'),
caseRouter = express.Router(),
    path=require("path"),
     bodyParser=require("body-parser"),
    mongoose=require("mongoose"),
    fs=require("fs");

require("../Models/CaseModel");
let caseSchema =mongoose.model("Cases");   

///////////.......تعديلات الcase....
//get
caseRouter.get("/hospital-profile",(request,response)=>{   
   console.log("hi from get case");
   // response.send("hi from get case");
   response.send()
    
  });
  
  
  
  ////////post
  
  caseRouter.post("/hospital-profile",(request,response)=>{
  /// console.log(request.body)

    console.log("hi from post")
    //console.log(request.body)
    let Case=new caseSchema({
        _id:request.body._id,
        Name:request.body.Name,
        Needed:request.body.Needed,
        Department:request.body.Department,
        ["Location.city"]:request.body.city,  
        ["Location.street"]:request.body.street
    });
    Case.save((error)=>{
        if(!error){
            console.log("HIII case post");
            //console.log(request.params.id)
          //find end 
  }
});//post
  


  
  /////list case
  
  //first try 

  caseRouter.get("/details",(request,response)=>{
      //  console.log(request.params.id)
    caseSchema.find({}//{_id:request.params.id}
      ,(err,result)=>{
      if(!err){
      console.log(result)
      //response.render("Hospitals/listHospital",{Hospitals:result});
  response.send (result)
     }else{response.send(err)} }) 
    
  
  });
  


  //-----------------------
//   //second try 
//   caseRouter.get("home",(request,response)=>{
//     //console.log(request.params.id)
// caseSchema.find({},(err,result)=>{
//   if(!err){
//   console.log(result)
//   //response.render("Hospitals/listHospital",{Hospitals:result});
// response.send (result)
//  }else{response.send(err)} }) 


// });

  
  // caseRouter.get("/hospital-home",(request,response)=>{
  //   caseSchema.find({},(err,result)=>{
  //     console.log(result)
  //     //response.render("Hospitals/listHospital",{Hospitals:result});
  //     response.send (result)
  //   }) 
  // });
  
});
  module.exports = caseRouter;
  