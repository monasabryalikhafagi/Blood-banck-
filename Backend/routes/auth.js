var express = require('express');
var router = express.Router();
mongoose = require("mongoose");

require("../Models/patientModel");
let patientSchema = mongoose.model("Patient");

require("../Models/HospitalModel");
let hospitalSchema = mongoose.model("Hospitals");

require("../Models/usersModel");
let usersSchema=mongoose.model("Users");

require("../Models/listcasesModel");
let ListcasesSchema = mongoose.model("Listcases");

require("../Models/createcaseModel");
let createcaseSchema=mongoose.model("Createcase");


router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




//==================================

//REGISTER

//=========================================
//get suppose to send the object ... result.send  is A MUST
router.get('/login', (req, res) => {
    console.log("hi from login get")
    usersSchema.find({_id:req.body._id},(error, result)=>{
        console.log(result);
        res.send(result);
    }


    );
    res.render('login');
});


//====================================================
// router.post('/login', (req, res) => {
//     flag="false"
//     console.log(req.body.Username, req.body.Password, req.body.type);


//     if(req.body.Username =="a" && req.body.Password =="1"){  
//         res.locals.who="1"     
//        // res.redirect('/admin/profile');
//     }

//     else if (req.body.type == 'pa'){ //Patient**
//         console.log("ddd");
//         patientSchema.find({}, (error, resulte) => {
//             if (!error) {
//                 console.log(resulte);
//                 resulte.forEach(element => {
//                     if (element.Username == req.body.Username && element.Password == req.body.Password) {
//                       //  res.redirect('/patients/profile');
//                      // res.locals.pat="pat"
//                      flag ="true"
                     

//                     } 
//                     //  console.log(element.Username);
//                     // console.log(element.Password); 
//                 });
//                 //res.send(resulte);
//                 //res.render('patients/patient');
//             } else {
//                 console.log(error);
//             }
//         }
//         );

//     } else if(req.body.type == 'hos'){
//         let flag =false;  //Hospital **
//         hospitalSchema.find({}, (error, resulte) => {
//             if (!error) {
//                 console.log(resulte);
//                 resulte.forEach(element => {
//                     if (element.Username == req.body.Username && element.Password == req.body.Password) {
//                         console.log("hospital");
//                         flag = true ;
//                         // res.send("doner")
//                         //res.redirect('/patients/profile');
//                     } 
//                     //  console.log(element.Username);
//                     // console.log(element.Password); 
//                 });

//               //  if(flag ==true) {console.log("Hospital")}
//                 //res.send(resulte);
//                 //res.render('patients/patient');
//             } else {
//                 console.log(error);
//             }
//         }
//         );

//     } else{
//         console.log("doner")   // DONOR **
//     }


//     // }else

//     res.locals.flag = flag ;


//     //// res.render('login');
// });


//====================================================
// The NEW 

router.post('/login', (req, res) => {
    console.log("hi from login post")

    // review the form var names !!!!!!!!!!!!!!
    usersSchema.findOne({$and:[{username:req.body.username} , {password:req.body.password}]}, (error , result )=>{
              
        //    console.log(result);

        //     if(result.type =="admin")
        //     res.send(result);

        //     else if(result.type =="patients")
        //      res.send(result);
        //      //   res.render("patients/profile/result._id");

        //     else if(result.type ==" hospitals")
        //     res.send(result );
        //         //res.render("hospitals/profile/result._id");
                

        //        //Check HERE ?!!!!!!!! 
        //     else if (result.type =="donorUser ") 
            res.send(result);
                //res.render("donors/profile/result._id");
    });
    //// res.render('login');
});



//==========================================================

//ADMIN

//=============================================================================================
router.post('/listcases',(req,res)=>{
    console.log("saved in");
    console.log(req.body);
myList = new ListcasesSchema({
   // _id:req.body._id,
   // Location:req.body.Location,
   ["Location.city"]:req.body.city,
   ["Location.street"]:req.body.street,
   Needed:req.body.Needed,
   });
 myList.save((erro)=>{
        if(!erro){
            console.log("saved");
            ListcasesSchema.findOne({_id:req.body._id},(resulte,error)=>{
          if(!error){

            res.send(resulte);
          }else{
            res.send(error); 
            console.log(" not saved");
        console.log(error);
          }
      
   }) 
          }

        });
});// end post cases
//=========================================================================

router.get('/listcases/:id',(req,res)=>{
   ListcasesSchema.find({/*Numberofacces:{$size:{$ne:Needed}},*/Donorreply:{$nin:[0,1]},Donors:{$ne:req.params.id}},(rsulte,erro)=>{
      if(!erro){
       // if({Numberofacces:{$size:!Needed}}) {Numberofacces:{$size:{$eq:Needed}}}
       if(Numberofacces.lengt<Needed)
          {  
             console.log("find it ");
          
            console.log(rsulte);

            res.send(rsulte);
       }else{
      console.log("find it two "); 
       }
      }else{
        console.log("not  find it ");
        console.log(erro);
        res.send(erro);
      }
    })
  });
//============================================================

  router.post('/accept/:id',(req,res)=>{
      console.log("from update");
    ListcasesSchema.updateOne({_id:req.body._id},{
        "$push":{
           Numberofacces:[5], 
       },"$set":{
        Donorreply:1,
        Donors:req.params.id
        }
     },(error,resulte)=>{
          if(!error)
          {  console.log("ok");
            console.log(resulte);
            res.send(resulte);
          }else{
          console.log("cant update");
          res.send(error)
         } });});
// accept function

//==========================================================================
         router.post('/regiect/:id',(req,res)=>{
            console.log("from update");
          ListcasesSchema.updateOne({_id:req.body._id},{
              "$set":{
                Donorreply:0 ,
                Donors:req.params.id 
             } },(error,resulte)=>{
                if(!error)
                { 
                     console.log("ok");
                  console.log(resulte);
                  res.send(resulte);
                }else{
                console.log("cant update");
                res.send(error)
               } });});

//=============================================
// regect function
// delet case from it table

router.post('/deletecase',(req,res)=>{
createcaseSchema.deleteOne({_id:req.body._id},(erro,resulte)=>{
if(!erro){
  console.log(resulte);
res.send(resulte);
}else{
  console.log(erro); 
  res.send(erro);
}
});
});
//========================================== Donetion opertions ========================
router.get('/donation',(req,res)=>{
  ListcasesSchema.find({},(erro,resulte)=>{
    if(!erro){
      console.log(resulte);
  //    console.log(result.Donors.Name);
    res.send(resulte);
    }else{
      console.log(erro); 
     res.send(erro);
    }
  })//.populate({"path":"case Donors"}).then((result)=>{

   
 // );
  
   
  
});




 

module.exports = router;

