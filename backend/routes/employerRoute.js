
const express= require("express");
const employerModel= require("../Models/employer")
const bcrypt = require("bcryptjs")


const router= new express.Router();

router.post("/employer/register",function(req,res){
    // sab forntend mah halyeko data tanna ko lagi 10 and 11 no code 
    // var employer= new employerModel(req.body);
    // employer.save()

    // res.send(employer)

    console.log("i m wtfru")

    const un =req.body.username1;// username matra tanna ko lagi 
    const pw= req.body.password1;// password matra tanna 
    bcrypt.hash(pw,10,function(err,hash1){

        const employer = new employerModel({Username:un,Password:hash1})// database ma hhalna ko lagi 
        employer.save()
        //error handle garna ko lagi .then and .catch halni 
        .then(function(){
            res.status(201).json({mes:"register succesfully"})
        })
        .catch(function(){
            res.status(500).json({mess:"error"})
    
        })
        
    })

    

 




})

router.put("/employer/update", function(req,res){
    const id1= req.body.id;
    const pw1= req.body.password1
    
    employerModel.updateOne({_id :id1},{Password:pw1})
    .then(function(result){
        res.status(201).json({mes:"updted password"})
    })
    .catch(function(err){
        res.status(500).json({ mes: "error" })
    })

})

module.exports= router;