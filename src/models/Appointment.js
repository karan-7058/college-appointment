const mongoose=require('mongoose');
const Availability = require('./Availability');

const appointmentSchema=new mongoose.Schema({
    professor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    Availability:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Availability',
        required:true
    },

    status:{
        type:String,
        enum:['booked' , 'cancelled'],
        default:'booked'
    }
},
  {timestamps:true}
);

module.exports=mongoose.model('Appointment' , appointmentSchema)

