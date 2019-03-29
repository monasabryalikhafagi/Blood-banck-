let express = require('express'),
   router = express.Router(),
   cors = require('cors'),
   path=require("path");

   router.get("/profile/:id?" , function(request,response,next){
       request.cookies.lastAcess;
response.render("usersHospital/profile",{userName})
    
   });
   module.exports=router;