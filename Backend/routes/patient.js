var express = require('express');
var router = express.Router();
mongoose=require("mongoose");

require("../Models/patientModel");
require("../Models/usersModel");
require("../Models/createcaseModel")
let patientSchema=mongoose.model("Patient");
let usersSchema=mongoose.model("Users");
let createcaseSchema=mongoose.model("Createcase");



//-------------------------------------
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



/* GET home page. */
//list patient

router.get('/list', function(req, res) {
console.log("bnnn");
patientSchema.find({},(error,resulte)=>{
if(!error){

  console.log(resulte);
  res.send(resulte);
  //res.render('patients/patient');
}else{
  console.log(error);
  res.send(error);
}
}
)
});

//add patient
router.get('/add', (req, res) =>{
  console.log("mmm");
 // res.send("kkk")
 res.render('patients/addpatient');
});//get add


router.post('/add', (req, res)=> {
 console.log("hhh");
  //console.log(req.body._id,req.body.PName);
 let patient=new patientSchema( {
     _id:req.body._id,
     PName:req.body.PName,
     Blood_group:req.body.Blood_group,
     ["Connection_way.Phonenumber"]:req.body.Phonenumber,
     ["Connection_way.Facebook"]:req.body.Facebook,
     Gender:req.body.Gender,
     Age:req.body.Age,
     ["Location.City"]:req.body.City,
     ["Location.Street"]:req.body.Street,
     Username:req.body.Username,
     Password:req.body.Password
   });
 patient.save((error)=>{
if(!error){
  console.log('resulte');
  res.redirect('/patients/list')
  //res.send("kkk");
}else{
  console.log(error);
}});
});// post add

 //delete patient
 router.get("/delete/:id",(request,response)=>{
  patientSchema.deleteOne({_id:request.params.id},(error)=>{
      if(!error)
      response.redirect('/patients/list');
  })
});

//update patient
router.get("/edit/:id?",(request,response)=>{
 //patientSchema.findOne({})
 // response.locals.myspeaker=allspecker 
 // console.log(result+"hh"); 

response.render("patients/editpatient");

});

router.post("/edit/:id",(request,response)=>{
console.log("hhfh")
  //maspeakerid=speakerSchema.findOne({})
  patientSchema.update({_id:request.params.id},{
      "$set":{
         _id:request.body._id,
          PName:request.body.PName,
          Blood_group:request.body.Blood_group,
          ["Connection_way.Phonenumber"]:request.body.Phonenumber,
          ["Connection_way.Facebook"]:request.body.Facebook,
          Gender:request.body.Gender,
          Age:request.body.Age,
          ["Location.City"]:request.body.City,
          ["Location.Street"]:request.body.Street    
     } },(error,resulte)=>{
        if(!error)
        {   console.log(resulte);
           res.send(resulte);
           // response.redirect("/patients/list");
        }else{
          console.log(error);
          res.send(error);
        } } );
      });


//============================================================================
      router.get('/register/:id?', (req, res) =>{
        console.log("Hi from get patient register ");
        res.render("patients/addPatient")
        //res.send(req.url);
      });//get register
      
//------------------------------      
  router.post('/register', (req, res)=> {
       console.log("His from post patient register");

        //console.log(req.body._id,req.body.PName);
       
        let patient=new patientSchema( {
          _id:req.body._id,
           PName:req.body.PName,
           Blood_group:req.body.Blood_group,
           ["Connection_way.Phonenumber"]:req.body.Phonenumber,
           ["Connection_way.Facebook"]:req.body.Facebook,
           Gender:req.body.Gender,
           Age:req.body.Age,
           ["Location.City"]:req.body.City,
           ["Location.Street"]:req.body.Street,
           Username:req.body.Username,
           Password:req.body.Password
         });
         

       patient.save((error)=>{
      if(!error){
        console.log('resulte');
        res.redirect('/patients/register')
       // res.send(res.body);
      }else{
        console.log(error);
      }});


      //------------------ USERS ----------------------
      let user=new usersSchema({
        _id:req.body._id,
        username:req.body.Username,
        password:req.body.Password,
        type:"patients"
            });

          user.save((er)=>{
            if(!er)
            console.log("user saved !!!");
          });  




  });// post register

//============================================================================

router.get('/profile/:id',(req,res)=>{
  console.log("bnnn");
patientSchema.findOne({_id:req.params.id},(error,resulte)=>{
if(!error){

  console.log(resulte);
  res.send(resulte);
  //res.render('patients/patient');
}else{
  console.log(error);}
});
 // res.render('patients/profile')
});// get profile

//=================================================================
router.post('/case',(req,res)=>{
  console.log(req.body.city,req.body.street,req.body.Needed,req.body.Name);
console.log("post case");
 let patientcase =new createcaseSchema({ 
 _id:req.body._id,
   ["Location.city"]:req.body.city,
  ["Location.street"]:req.body.street,
  Department:req.body.Department,
  Name:req.body.Name,
 Needed:req.body.Needed
 });

 patientcase.save((erro)=>{
if(!erro){
  createcaseSchema.findOne({_id:req.body._id},(resulte,error)=>{
if(!error){
  res.send(resulte);
}else{
  res.send(error); 
}
  });
  // console.log(" casesaved");
  // res.send()
}
else 
{
  console.log(erro);}
 });
});
//==================================================================


router.get('/case',(req,res)=>{
  createcaseSchema.find({},(rsulte,erro)=>{
    if(!erro){
      
      console.log("find it ")
    res.send(rsulte);
    }else{
      console.log("not  find it ")
      res.send(erro);
    }
  })
})//// get case 

//======================================================


 //delete patient
 router.get("/delete/:id",(request,response)=>{
  patientSchema.deleteOne({_id:request.params.id},(error,result)=>{
      if(!error)
      response.send(result)
      //response.redirect('/patients/list');
  });
});





module.exports = router;