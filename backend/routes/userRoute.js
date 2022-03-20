const express = require("express");
const userModel = require("../Models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth.js")
const upload = require("../middleware/fileupload")

const router = new express.Router()

router.post("/route/test", auth.verifyEmployee, function (req, res) {
    console.log(req.userdata)
    res.send("donee")

    console.log("i m wtfru")

})

// to register employeee

router.post("/user/register", upload.single("myimage"), async function (req, res) {
    console.log(req.body)
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const location = req.body.location
    const CompanyName = req.body.CompanyName
    const jobPosition=req.body.jobPosition

    const usertype = req.body.usertype
    const profile_pic = req.file.filename
    const isRegistered = await userModel.findOne({ username: username })

    console.log(isRegistered)
    if (isRegistered == null) {
        bcrypt.hash(password, 10, function (err, hash) {
            console.log(hash)
            const user = new userModel({
                username: username,
                password: hash,
                email: email,
                profile_pic: profile_pic,
                location: location,
                CompanyName: CompanyName,
                jobPosition:jobPosition,
                usertype: usertype
            })
            user.save()
                .then(function () {
                    res.status(201).json({
                        success: true,
                        data: user,
                        message: "Regisered Successfully!!!"
                    })
                    console.log("register")
                })


                .catch(function (e) {
                    console.log(e)
                    res.status(500).json({ message: "Error occured." })


                })


        })
    }
    else {
        res.status(201).json({
            success: false,
            message: "Regisered failed!!!"
        })
    }

})


// login system

router.post("/user/login", function (req, res) {
    console.log(req.body)
    // first we need username and passord 
    const username = req.body.username // username1 should match to body of postman
    const password = req.body.password

    // we need to check if the username exits or not

    userModel.findOne({ username: username })
        .then(function (userdata) {
            console.log(userdata)


            // all the data of username is now in variable userdata
            if (userdata === null) {
                // If username is invalid
                return res.status(403).json({ message: "Invalid login credential" })
            }
            // for valid user 
            bcrypt.compare(password, userdata.password, function (err, result) {
                if (result === false) {
                    return res.status(403).json({ message: "invalid password" })
                }

                // both username and passord is correct
                // res.send("login succesfull")
                console.log("login succesfull")
                // now we need to create token
                const token = jwt.sign({ YourID: userdata._id }, "anysecretkey");
                res.status(200).json({
                    success: true,
                    token: token,
                    usertype: userdata.usertype,
                    data: userdata,
                    message: "auth success"
                });

            }

            )

        })

        .catch(function (e) {
            console.log(e)
        })

})

// to upload file 

router.put("/profile/upload/:id",  upload.single("profile_pic"), function (req, res) {

  
      const profile_pic = req.file.filename
      const id = req.params.id;
      userModel.findByIdAndUpdate(
          { _id: id },
          {
            profile_pic: profile_pic,
          }
        )
  
        .then(function (data) {
          res
            .status(200)
            .json({ success: true, data });
          console.log("Updated?");
        })
        .catch(function (e) {
          res.status(500).json({ message: e });
        });


});

router.get("/user/get", auth.verifyEmployee, function (req, res) {


    userModel.find({ usertype: "employee" })

        .then(function (data) {
            res.status(201).json({ success: true, data: data, message: "display employee Successfully!!!" })
        })

        .catch(function () {
            res.status(500).json({ message: "Error occured." })
        })

})

router.get("/display/register_user/:id", function (req, res) {
    const id = req.params.id;
    console.log(id)
    userModel.findById(id)
        .then(function (data) {
            res.status(200).json(data)
        })

        .catch(function () {
            res.status(500).json({ message: "Error occured." })
        })

})

router.put("/user/update", async function (req, res) {
    try {
        const data = await userModel.updateOne(
            { _id: req.body.id },
            {
                phonenumber: req.body.phonenumber,
                location: req.body.location,
                userBio: req.body.userBio
            }


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

router.get("/updateSingle/user/:id", auth.verifyEmployee, function (req, res) {
    const id = req.params.id;
    console.log(id)
    userModel.findById(id)
        .then(function (data) {
            res.status(200).json(data)
        })

        .catch(function () {
            res.status(500).json({ message: "Error occured." })
        })

})
router.put("/updateResume/:id", auth.verifyEmployee, upload.single("resume"), function (req, res) {
    if (req.file == undefined) {
        return res.status()
      }
      // const path = req.file.path;
      const resume = req.file.path;
      const id = req.params.id;
  
      userModel
        .findByIdAndUpdate(
          { _id: id },
          {
            resume: resume,
          }
        )
  
        .then(function (result) {
          res
            .status(200)
            .json({ message: "Resume has been updated sucessfully" });
          console.log("Updated?");
        })
        .catch(function (e) {
          res.status(500).json({ message: e });
        });

})


module.exports = router;