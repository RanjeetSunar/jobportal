const express= require("express");
const employeeModel= require("../Models/employee");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const upload=require("../middleware/fileupload")
;


const router= new express.Router()

router.post("/route/test",function(req,res){

    res.send("donee")

    console.log("i m wtfru")

})

// to register employeee

router.post("/employee/register",function(req,res){
    const un= req.body.username1
    const pw = req.body.password1
    const loc=req.body.location
    const email=req.body.Email
    console.log(req.body)

    bcrypt.hash(pw ,10,function(err , hash){
        console.log(hash)
        const employee = new employeeModel({Username : un  ,Email:email, Location:loc,Password : hash})
        


        employee.save()
        .then(function(){
            res.status(201).json({success:true,data:employee,message : "Regisered Successfully!!!"})
        })

        .catch(function(){
            res.status(500).json({message : "Error occured."})
        })

    })
})


// login system

router.post("/employee/login",function(req,res){
    // first we need username and passord 
    const username= req.body.username1 // username1 should match to body of postman
    const pw = req.body.password1 

    // we need to check if the username exits or not

    employeeModel.findOne({ Username: username})
    .then(function(userdata){
        // all the data of username is now in variable userdata
        if (userdata === null){  // 
            if(userdata.usertype == 'emplouer'){
                
            }
            return res.status(403).json({message:"Invalid login credential"})
        }
        // for valid user 
        bcrypt.compare(pw,userdata.Password,function(err,result){
            if(result===false){
                return res.status(403).json({message:"invalid password"})
            }
            
            // both username and passord is correct
            // res.send("login succesfull")
            console.log("login succesfull")
            // now we need to create token
            const token = jwt.sign({YourID:userdata._id},"anysecretkey");
            res.status(200).json({success:true,token:token, message:"auth success"});
            console.log("After jwt")
        }
        
        )

    })
    
    .catch(function(){

    })

})

// to upload file 

router.post("/profile/upload",upload.single("myimage"),function(req,res){

    // database mah halna ko lagi 
    console.log(req.file)        //req.file == filename ,destination, mimetype,size
    const data = new employeeModel({
        profile_pic: req.file.filename
    })
    data.save()
    .then(function(){

    })
    .catch(function(){

    })
    



});

router.get("/employee/get",function(req,res){
  

    employeeModel.find()

    .then(function(data){
        res.status(201).json({success:true,data:data,message : "display employee Successfully!!!"})
    })

    .catch(function(){
        res.status(500).json({message : "Error occured."})
    })
   
})


module.exports = router;