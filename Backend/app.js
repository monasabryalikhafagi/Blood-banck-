let express = require('express'),
path = require('path'),
bodyParser=require("body-parser" ),
cookieParser = require('cookie-parser'),
morgan= require('morgan'),
hospitalRouter = require('./routes/hospitalRouter'),
DonationRouter = require('./routes/DonationRouter'),
patientRouter = require('./routes/patient'),
authRouter = require('./routes/auth'),
caseRouter = require('./routes/caseRouter'),
    
    donorRouter=require("./routes/donorRouter"),
    donorUserRouter=require("./routes/donorUser"),

adminRouter = require('./routes/AdminRouter'),

mongoose=require("mongoose");

//open server
let app = express();
mongoose.connect("mongodb://localhost:27017/Bbank" );
//using engin 

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/hospitals', hospitalRouter);  //??????????????????
app.use('/admin', adminRouter);
app.use('/Donation', DonationRouter);
app.use('/patients', patientRouter);
app.use('/', authRouter);



//donor ?????????????
app.use("/donorUser",donorUserRouter)
app.use("/donors",donorRouter);



app.use('/cases', caseRouter);


app.use((request,response)=>{
response.send("Not Found");
});


app.listen(8080,()=>{
console.log("I am Listening ......");
});

module.exports = app;

