const express=require('express');
const router=express.Router();
const {requireStudent}=require('../middleware/roleMiddleware.js');
const{requireAuth}=require('../middleware/authMiddleware.js');

const{bookAppointment}=require('../controllers/appointmentController.js');


router.post('/bookAppointment' , requireAuth, requireStudent, bookAppointment);

module.exports=router;


