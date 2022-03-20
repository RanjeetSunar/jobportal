const { Router } = require("express");
const multer=require("multer");
const router = require("../routes/userRoute");




const Storage=multer.diskStorage({            /////where to storage our file 
    
    //where and with what name (foldername,filename)
    destination:function(req,file,cb){
        cb(null,"./jobs")  //where jobs is foldername
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + file.originalname)
    }

})



const upload = multer({
    storage:Storage
   

});



module.exports=upload;