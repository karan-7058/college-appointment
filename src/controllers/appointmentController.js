const Appointment=require('../models/Appointment.js');
const Availability=require('../models/Availability.js');


const bookAppointment=async(req, res)=>{
    const {professorId , date}=req.body;

    const availability=await Availability.findOne({
        professor:professorId,
        date,
        isBooked:false
    });

    if(!availability){
       return res.status(400).json("no slots are available");

    }

    const appointment=await Appointment.create({
         student:req.session.user.id,
         professor:professorId,
         Availability:availability._id,
         status:'booked'
    });

    availability.isBooked=true;
    await availability.save();

    res.status(201).json({
        message:'appointment booked successfuly',
        appointment
    })


}

module.exports={bookAppointment};