const express= require("express");
const router= express.Router();
const UserSchema= require("../models/Users");
const jwt= require("jsonwebtoken");
const bycrptjs= require("bcryptjs");
const config= require("config");
const auth= require("../middleware/auth")
const {check,validationResult}= require("express-validator");

const { jwtSecret } = config;

// START GET USER
router.get('/user', auth, async (req, res) => {
    try {
      const user = await UserSchema.findById(req.user.id).select('-password');
      if (!user) throw Error('User does not exist');
      res.json(user);
    } catch (erorr) {
      res.status(401).json({ msg: erorr.message });
    }
  });

//   END GET USER



// START REGISTER FUNCTION
router.post(
    "/register",  
    // username must be an email
    [check('email',"Input isn't email").isEmail(),
    // username must be at least 2 char. long
    check("username","usernmae min 2 character").isLength({min:2}),
    // name must be at least 2 char long
    check("firstname","name min 2 character").isLength({min:2}),
     // last must be at least 2 char long
     check("lastname","lastname min 2 character").isLength({min:2}),
    // password must be at least 5 chars long
    check('password',"password min 5 charachter").isLength({ min: 5 })],
    async(req,res)=>{
       try{
        let{firstname,lastname,username,email,password}=req.body;
        // username: username = username
        let user= await UserSchema.findOne({username})
        let usercheck2= await UserSchema.findOne({email})

        // errors is array
            const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(401).json({errors:errors.array()})
        }
        if(user){

            return res.status(401).json({msg:"Username is already exist"})
        }
        if(usercheck2){
            return( 
                res.status(401).json({msg:"Email is already exist"}))
        }
      
        let krypt= await bycrptjs.genSalt(8);
        password= await bycrptjs.hash(password,krypt);
         user=new UserSchema({
            firstname,
            lastname,
            username,
            email,
            password
        })
    //    PUT ID IN PAYLOAD/TO GET ID FROM  TOKEN USE VERIFY TOKEN 
        await user.save();
        const payload={
            user:{
                id:user.id
            }
        }
        jwt.sign(
            payload,
            jwtSecret,
          
            (err,token)=>{
                if(err) throw err;
                res.json({token})
            }
        )
       }catch(err){
            console.log(err)
            return res.status(500).json({msg:"server error..."})
       }
    }
)
// END REGISTRATION


// START LOGIN FUNCTION
router.post("/login",
    // CHECK EMIAL AND PASSWORD
   [ check("email","Input isnt email").isEmail(),
    check("password","Password must have min 5 char.").isLength(5)],
    async(req,res)=>{
    try {
        const{email,password}=req.body;
        const user= await UserSchema.findOne({email});
        if(!user){
            return res.status(401).json({msg:"User not found"})
        }
         //  errors is array
          const errors= validationResult(req);
          if(!errors.isEmpty()){
              return res.status(401).json({msg:errors.array()})
          }
        //   CHECK IS THE USER HAS RIGHT PASSWORD
          let isPasswordRight=await bycrptjs.compare(password,user.password);
          if(isPasswordRight){
             const payload={
                 user:{
                     id:user.id
                 }
             }
             jwt.sign(
                 payload,
                 jwtSecret,

             (error,token)=>{
                if(error) throw error;
                res.json({token})
            }
             )
          }
          else{
            return res.status(401).json({msg:"Incorrect password"});
          }
    } catch (error) {
        return res.status(401).json({msg:errors.array()})
    }
    })

    // END LOGIN FUNCTION

    
module.exports=router;