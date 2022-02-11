var mongoose = require("mongoose");

var addressSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
 
    addresstype:{
        type:String,
        trim:true,
        required:true
    },
    addressLine1:{
        type:String,
        trim:true,
        required:true
    },
    addressLine2:{
        type:String,
        trim:true,
        required:false
    },
    landmark:{
        type:String,
        trim:true,
        required:false
    },
    pincode:{
        type:String,
        trim:true,
        required:true
    },
    district:{
        type:String,
        trim:true,
        required:true
    },
    state:{
        type:String,
        trim:true,
        required:true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);
