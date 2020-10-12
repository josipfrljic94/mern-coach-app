const jwt= require("jsonwebtoken");
const config= require("config");



module.exports= (req,res,next)=>{
    const token= req.header("x-auth-token");

    // check is token exist
    if (!token)
    return res.status(401).json({ msg: 'No token, authorization denied' });
    try {

        // verify token, change in id
        const decoded=jwt.verify(token,config.get("jwtSecret"));

        // take user from token ==>opposite jwt.sign
        req.user = decoded.user;
        next()
    }catch (error) {
        console.log(error)
        res.status(401).json({ msg: 'No token, authorization denied' });
    }
}
