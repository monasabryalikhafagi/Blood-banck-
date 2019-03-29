let express=require("express"),
//DonationRouter=express.Router(),
path=require("path"),
mongoose=require("mongoose");
require("../models/DonationModel");
require("../Models/HospitalModel");


var router = express.Router(); 

let DonationSchema=mongoose.model("Donation");
let hospitalSchema=mongoose.model("Hospitals");



//---------------
router.get('/profile/:id', function(req , res){
    res.send('Admin Profile ')
});


module.exports = router;



//=================================================
// ADD ----------

// DonationRouter.get("/add",(request,response)=>{
//     DonationSchema.find({},(error,result)=>{
//         console.log(
//             "Hello from add donation get"
//         )
//         response.render("Donation/addDonation",{Donations:result});
//     })
// })

// //------------------------------------------------------------
// DonationRouter.post("/add",(request,response)=>{
//     let Donation=new DonationSchema({
//         _id:request.body.id,
//         Donation_Date :request.body.date,
//         Patient:request.body.patient,
//         Hospital:request.body.hospital,
//         Donor:request.body.donor 
//     });

//     Donation.save((error)=>{
//         if(!error){
//         console.log("Hi from add donation post")
//         response.redirect("/Donation/list");}else{console.log(error)}
//     });
// });

// // LIST -------------------- *need to do populate?? 
// DonationRouter.get("/list",(request, response)=>{
//     DonationSchema.find({}, (error, result)=>{//.populate('Hospital Patient').then((result)=>{
//         console.log(result);
//         response.render("Donation/listDonation",{Donations:result}); // /not here ???
// //});
//     });
// });



// // EDIT ----------------------------------------
// // how populate work ?!
// DonationRouter.get("/edit/:id",(request,response)=>{
//     DonationSchema.findOne({_id:request.params.id}).populate({"path" : "Hospitals "}).then((result)=>{
//         hospitalSchema.findOne({"_id" : result.Hospital}, (err , res)=>{
//             console.log(res);
//             response.locals.myHospital = res;
//             response.render("Donation/editDonation",{Donation:result}); // /not here ???

//         }) // find hos
//     }); // find donation

// });//get 

// // //EDIT  without populate-------------------------------------
// // DonationRouter.get("/edit/:id",(request,response)=>{
// //     DonationSchema.findOne({_id:request.params.id} , (error , result )=>{
// //         hospitalSchema.findOne({"_id" : result.Hospital}, (err , res)=>{
// //             console.log(res);
// //             //response.locals.myHospital = res;
// //             response.render("Donation/editDonation",{Donation:result}); // /not here ???

// //         }) // find ALL hospitals //#endregion
// //     }); // Donation
// // }); // get 

// //------------------
// DonationRouter.post("/edit/:id",(request,response)=>{
//     DonationSchema.update({_id:request.params.id},{
//         "$set":{
//             Donation_Date:request.body.date,
//             Patient:request.body.patient,
//              Donor:request.body.donor,
//              Hospital:request.body.hospital        }
        
//     },(error)=>{
//         if(!error)
//         {
//             response.redirect("/Donation/list");
//         }else{console.log(error)}
//     });
// });


// // //--------------------------------
// DonationRouter.get("/delete/:id",(request,response)=>{ 
//     DonationSchema.deleteOne({_id:request.params.id},(error)=>{
//         if(!error)
//         response.redirect("/Donation/list");
//     })
// });
// // //-------------------

// module.exports=DonationRouter;