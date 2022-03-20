const mongoose=require("mongoose");

const jobSchema= new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    jobType:{type:String},// unique: true if name is unique--- yesmah emum use garni aani type lekni 
    jobSalary:{type:Number},
    jobLocation:{type:String},
    jobDescription:{type:String},
    jobPosition:{type:String}
 
});

const job= mongoose.model("Jobs", jobSchema);
module.exports= job;