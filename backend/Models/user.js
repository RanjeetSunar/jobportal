const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true


    },
    profile_pic: { type: String,default:"asdfff" },
    location: { type: String },
    email: {
        type: String,
        
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    usertype: {
        type: String,
        required: true,

        enum: ["employer", "employee"]
    },
    CompanyName: { type: String },
   
    CompanyLocation: { type: String },
    CompanyJobType: { type: String },
    userBio:{type:String,default:"this is my BIO"},
    workExp:{type:String},
    project:{type:String},
    phonenumber:{type:String,default:"9840139811"},
    resume:{type:String,default:null}

    // user boi, work exp , project, cv


})

module.exports = mongoose.model("User", userSchema)