const express= require("express");
const cors=require("cors")

const data=require("./Db_connection/db_connection");
const bodyParser=require("body-parser");


const app= express();
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use('/jobs',express.static(__dirname+'/jobs'));

const userRoute=require("./routes/userRoute");

// const employeeRoute= require("./routes/employeeRoute");
// const employerRoute= require("./routes/employerRoute");
const jobRoute= require("./routes/jobRoute");
const applyRoute=require("./routes/applyRoute")

app.use(userRoute)
app.use(applyRoute)

// app.use(employeeRoute);
// app.use(employerRoute);
app.use(jobRoute);

app.listen(90);