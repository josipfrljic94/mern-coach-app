const express= require("express");
const router= express.Router();
const CoachSchema= require("../models/Coach")

router.get("/", async (req, res) => {
    const coaches = await CoachSchema.find({});
    res.send(coaches);
  });

router.post("/",async(req,res)=>{
    let newCoach= new CoachSchema(req.body);
    let savedCoach=await newCoach.save()
    res.send(savedCoach);
})

router.delete("/:id",async(req,res)=>{
    const deletedCoach= await CoachSchema.findByIdAndDelete(req.params.id);
    res.send(deletedCoach);
})


 module.exports= router;