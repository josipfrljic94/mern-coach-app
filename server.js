const express= require("express");
const app= express();
const cors= require("cors");
// const bodyParser= require("body-parser");
const connectToDB=require("./config/connectToDB");
// const users = require("./routes/users");



app.use(cors());
app.use(express.json({extended:false}));
connectToDB();



app.get("/",(req,res)=>{
    res.send(
        "hello"
    )
})
// app.use(bodyParser.json());
// app.use("/api/users",users)

let PORT=process.env.PORT || 5010;
app.listen(PORT ,()=>console.log(`Server running on port ${PORT}`))