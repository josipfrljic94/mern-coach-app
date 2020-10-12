const express= require("express");

const app= express();
const cors= require("cors");
// const bodyParser= require("body-parser");
const connectToDB=require("./config/connectToDB");
const users =require("./routes/users");
const coaches=require("./routes/coaches");



app.use(cors());

connectToDB();



app.get("/",(req,res)=>{
    res.send(
        "hello"
    )
})
app.use(express.json());
app.use("/api/users",users)
app.use("/api/coaches",coaches)

let PORT=process.env.PORT || 5010;
app.listen(PORT ,()=>console.log(`Server running on port ${PORT}`))