const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/authMiddleware");
const { requireProfessor } = require("../middleware/roleMiddleware");
const {createAvailability} = require("../controllers/availabilityController");
const {deleteAppointment}=require('../controllers/appointmentController.js');


router.post("/availability", requireAuth, requireProfessor , createAvailability);

router.delete('/appointment/:appointmentId', requireAuth, requireProfessor, deleteAppointment)

module.exports = router;
