
  
var mongoose = require("mongoose");
var User = require("./user");
var Job = require("./jobModels");
var SCHEMA = mongoose.Schema;

//jobs
const applySchema = new SCHEMA({
  userid: {
    type: SCHEMA.Types.ObjectId,
    ref: User,
  },
  jobid: {
    type: SCHEMA.Types.ObjectId,
    ref: Job,
  },
 
 
});

const APPLY = mongoose.model("applied", applySchema);
module.exports = APPLY;
