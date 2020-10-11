const mongoose= require("mongoose");

let userSchema= mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true,
        },
        lastname:{
            type:String,
            required:true,
        },
        username:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
)
module.exports=userSchema=mongoose.model("user",userSchema);