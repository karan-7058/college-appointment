const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/authMiddleware");
const { requireProfessor } = require("../middleware/roleMiddleware");
const {
  createAvailability,
  getAvailability,
} = require("../controllers/availabilityController");

router.post(
  "/availability",
  requireAuth,
  requireProfessor,
  createAvailability
);

router.get(
  "/:professorId/availability",
  requireAuth,
  getAvailability
);

module.exports = router;
