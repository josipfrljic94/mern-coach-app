const mongoose= require("mongoose");
const shortid= require("shortid");

let CoachShema=mongoose.Schema({
    _id:{type: String,default:shortid.generate}, 
    name:{
        type:String,
        require:true,
    },
    master:{
        type:Array,
        require:true,
    },
    desc:{
        type:String,
        require:true
    },
    clients:{
        type:Number,
        require:true
    },
    img:{
        type:String,
        require:true
    }

})

module.exports=CoachShema=mongoose.model("coach",CoachShema);