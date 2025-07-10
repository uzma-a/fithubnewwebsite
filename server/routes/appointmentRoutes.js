// routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const AppointmentModel = require('../models/AppointmentDetail');

// POST route to book appointment
router.post('/book-appointment', async (req, res) => {
  try {
    const { fullName, email, subject, message, appointmentDate, appointmentTime } = req.body;

    const newAppointment = new AppointmentModel({
      fullName,
      email,
      subject,
      message,
      appointmentDate,
      appointmentTime,
    });

    await newAppointment.save();
    res.status(200).json({ success: true, message: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
});

module.exports = router;
