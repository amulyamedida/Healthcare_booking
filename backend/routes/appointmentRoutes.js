const express = require('express');
const router = express.Router();
const {
  bookAppointment,
  deleteAppointment,
  updateAppointment
} = require('../controllers/appointmentController');

router.post('/', bookAppointment);
router.delete('/:id', deleteAppointment);
router.put('/:id', updateAppointment);

module.exports = router;
