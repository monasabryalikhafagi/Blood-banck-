var express = require('express');
var router = express.Router();
let usersSchema=mongoose.model("Users");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/delete/:id",(request,response)=>{
  usersSchema.deleteOne({_id:request.params.id},(error,result)=>{
      console.log(error);
      // response.render("donors/editdonor",{Donors:result})
      response.send(result)
  });
})


module.exports = router;
