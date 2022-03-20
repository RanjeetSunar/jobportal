const jwt= require("jsonwebtoken");
// const employee = require("../Models/employee");
const user= require("../Models/user")


//guard
module.exports.verifyEmployee = function(req,res,next){
    try{
        if(!req.headers.authorization){
            res.json({
                message: "No token"
            })
        }
        else{
            const token=  req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, "anysecretkey");
        user.findOne({_id: data.YourID})   /// database mah gayera check garxa findONe le
        .then(function(result){            //aabo result mah tyo id ko sab data xa(like tyo id related usename all )
            if(result){
                
                if(result.usertype === "employee"){
                    req.userdata = result;
                    next()
                }
                else{
                    res.json({
                        message: "Unauthorized"
                    })
                }
                
                
            }else{
                res.json({
                    message:"usernot found"
                })
            }
           

        })
        .catch(function(e){
            console.log(e)
            res.json({

                message: "something went wrong"
            })

        })
    }

    }
    catch(e){
        console.log(e)
        res.status(401).json({error:e})

    }
}

module.exports.verifyEmployer = function(req,res,next){
    try{
        const token= req.headers.authorization && req.headers.authorization.split(" ")[1];
        if(!token){
            res.json({
                message: "No token"
            })
        }
        else{
        const data = jwt.verify(token, "anysecretkey");
        user.findOne({_id: data.YourID})   /// database mah gayera check garxa findONe le
        .then(function(result){            //aabo result mah tyo id ko sab data xa(like tyo id related usename all )
            if(result){
                
                
                if(result.usertype === "employer"){
                    req.userdata = result;

                    next()
                }
                else{
                    res.json({
                        message: "Unauthorized"
                    })
                }
                
                
            }else{
                res.json({
                    message:"usernot found"
                })
            }
           

        })
        .catch(function(e){
            console.log(e)
            res.json({

                message: "something went wrong"
            })

        })
    }

    }
    catch(e){
        console.log(e)
        res.status(401).json({error:e})

    }
 
}