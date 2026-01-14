const Availability =require('../models/Availability');

const createAvailability=async(req , res)=>{
    const {date , startTime , endTime} = req.body;

    if(!date || !startTime || !endTime){
        return res.status(400).json("all fields are required");
    }

    const slot=await Availability.create({
        professor:req.session.user.id,
        date,
        startTime,
        endTime
     })

     res.status(201).json(slot);

}

const getAvailability=async(req, res)=>{
    const {professorId}=req.params;

    const slots=await Availability.find({
        professor:professorId,
        isBooked:false
    })

    res.json(slots);
}

module.exports={createAvailability , getAvailability};