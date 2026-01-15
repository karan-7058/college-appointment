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

const myAppointment=async(req, res)=>{

    const appointments=await Appointment.find({
        student:req.session.user.id,
        status:'booked'
    })

    res.json({
        appointments
    })
}

const deleteAppointment = async (req, res) => {
    const { appointmentId } = req.params;

    const appointment = await Appointment.findOne({
        _id: appointmentId,
        professor: req.session.user.id,
        status: 'booked'
    });

    if (!appointment) {
        return res.status(404).json({ message: 'appointment not found' });
    }

    appointment.status = 'cancelled';
    await appointment.save();

    const availability = await Availability.findById(appointment.Availability);
    if (availability) {
        availability.isBooked = false;
        await availability.save();
    }

    res.json({ message: 'appointment cancelled successfully' });
}

module.exports={bookAppointment , myAppointment, deleteAppointment};