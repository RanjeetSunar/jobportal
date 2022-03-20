
const express = require("express");


const job = require("../Models/jobModels");
const applyjob = require("../Models/apply");
const user = require("../Models/user");
const router = new express.Router();
const auth = require("../middleware/auth");



router.post("/job/applyJob/:id", auth.verifyEmployee, function (req, res) {
    const userid = req.userdata._id
    const jobid = req.params.id
    console.log(userid)

    const jobdata = new applyjob({
        userid: userid,
        jobid: jobid,
    });
    
    jobdata.save()
        // .populate("userid")

        .then(function (data) {
            res.status(201).json({ success: true, data });
            console.log("doneeeeeeeeeeeee")
        })
        .catch(function (err) {
            res.status(500).json({ message: err });
        });

})

router.delete("/delete/applyJob/:id", auth.verifyEmployee, function (req, res) {
    const id = req.params.id;

    applyjob.deleteOne({
        _id: id,
    })
        .then(function (data) {
            res.status(200).json({data,message:"deleted"});
            console.log("deleted successfully");
        })
        .catch(function (e) {
            res.status(500).json({ message: e });
        });


})



router.get("/show/applied", auth.verifyEmployee, function (req, res) {
    
    const userid = req.userdata._id;
    applyjob
        .find({
            userid: userid,
        }).populate('userid jobid')
       
        
       
        .then(function (data) {
            res.status(200).json(data);

            console.log("applied is " + data);
        })
        .catch(function (e) {
            res.status(500).json({ message: e });
            console.log("error"+e)
        });



})
// employer ko lagi koskosle apply garyo herna 
router.get("/show/whoapplied/:id", auth.verifyEmployer, function (req, res) {
    const jobid = req.params.id;
    const userid = req.userdata._id;
    applyjob
        .find({
            jobid: jobid,
        }).populate('userid')
        .populate('jobid')
        .then(function (data) {
            res.status(200).json(data);
            //console.log("applied is " + data);
        })
        .catch(function (e) {
            res.status(500).json({ message: e });
        });



})










module.exports = router
