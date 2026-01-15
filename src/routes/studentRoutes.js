const express=require('express');
const router=express.Router();
const {requireStudent}=require('../middleware/roleMiddleware.js');
const{requireAuth}=require('../middleware/authMiddleware.js');
const{getAvailability}=require('../controllers/availabilityController.js');

const{bookAppointment, myAppointment}=require('../controllers/appointmentController.js');


router.post('/bookAppointment' , requireAuth, requireStudent, bookAppointment);
router.get('/myAppointment' , requireAuth, requireStudent, myAppointment);
router.get("/:professorId/availability" , requireAuth, getAvailability);


module.exports=router;


