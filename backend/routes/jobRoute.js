const express = require("express");
const jobModel = require("../Models/jobModels")
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/job/insert", auth.verifyEmployer,function (req, res) {
    console.log(req.body) 
    

    const jobType = req.body.jobType;// to insert job type 
    const jobLocation = req.body.jobLocation;// to insert jlocation 
    const jobSalary = req.body.jobSalary;
    const jobPosition = req.body.jobPosition
    const jobDescription = req.body.jobDescription
   

    try {

        const job = new jobModel({
            userID: req.userdata._id,
            jobPosition:jobPosition,
            jobSalary:jobSalary,
            jobLocation:jobLocation,
            jobDescription:jobDescription,
            jobType:jobType




        })
        job.save()
        console.log(job)
        res.json({
            data: job,
            messsage: "job inserted"
        })
    

    }
    catch (e) {
        res.json({
            message: "error" + e,

        })

    }


})
// router.put("/job/update",function (req, res) {
//     console.log(req.body)
//     const id = req.body.id;
//     const jobSalary = req.body.jobSalary;

//     const data = jobModel.updateOne(
//        {_id: id},
//         {jobSalary: jobSalary}

//     )
   
//         .then(function (result) {
//             res.json({
//                 message: "done",
//                 success:true,
//                 data:result
             
//             })
//         })
//         .catch(function (e) {
//             console.log(e)

//             res.json({
//                 message:"error"+e
//             })
           
//         })
       


// })








// const data = new job(req.body);

// // console.log(data)
// data.save()



//error handle garna ko lagi .then and .catch halni 
// .then(function(result){
//     res.status(201).json({mes:"Job inserted"})
// })
// .catch(function(e){
//     res.status(500).json({mess:"error"})

// })



router.put("/job/update", async function (req, res) {
    try {
        const data = await jobModel.updateOne(
            { _id: req.body.id },
            { jobType: req.body.jobType,
             jobSalary: req.body.jobSalary ,
            jobPosition: req.body.jobPosition}


        )
        res.json({
            success: true,
            data: data,
            message: "completed"

        })
        console.log("product updated")

    }
    catch (e) {
        res.json({
            message: "error" + e
        })

    }
})

// job display garauna ko lagi get method 

router.get("/show/jobs", function (req, res) {

    jobModel.find()
        .then(function (data) {
            res.status(201).json({ success: true, data: data, message: "display jobs Successfully!!!" })
        })

        .catch(function () {
            res.status(500).json({ message: "Error occured." })
        })


})

// id ko base mah single data display garna ko lagi
router.get("/updateSingle/jobs/:id",  function (req, res) {
    const id=req.params.id;
    console.log(id)
    jobModel.findById(id)
        .then(function (data) {
            res.status(200).json(data)
        })

        .catch(function () {
            res.status(500).json({ message: "Error occured." })
        })

})


router.post("/search/jobs", async function (req, res) {
    try {
        const jobs = await jobModel.find({
            jobLocation: req.body.jobLocation,
            jobType: req.body.jobType
        })
        console.log("done")
        res.json({
            success: true,
            data: jobs,
            message: "Completed"
        })
    } catch (error) {
        res.status(500).json({ message: "Error occured." })

    }




})
router.delete("/job/delete/:id",async function(req,res){
    const id =req.params.id;
    console.log(id)
    const deleteJobs= await jobModel.deleteOne({_id:id})
    res.json(
        {message:"succesfully deleted",
        data:deleteJobs
    
    
    }
        
        )
})

module.exports = router

