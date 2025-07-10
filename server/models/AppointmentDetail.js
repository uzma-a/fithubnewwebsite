const mongoose = require('mongoose');

const AppointmentDetailSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    message: { type: String },
    appointmentDate: { type: String, required: true }, // or type: Date if you're storing full date
    appointmentTime: { type: String, required: true }, // e.g. "10:30 AM"
    createdAt: { type: Date, default: Date.now },
});

const AppointmentModel = mongoose.model("AppointmentDetail", AppointmentDetailSchema);
module.exports = AppointmentModel;
