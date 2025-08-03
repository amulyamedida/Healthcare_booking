const fs = require('fs');
const path = require('path');

const appointmentsPath = path.join(__dirname, '../data/appointments.json');

const bookAppointment = (req, res) => {
  const { patientName, email, date, time, doctorId } = req.body;

  if (!patientName || !email || !date || !time || !doctorId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const appointments = JSON.parse(fs.readFileSync(appointmentsPath));
  
  const newAppointment = {
    id: Date.now().toString(),
    patientName,
    email,
    date,
    time,
    doctorId
  };

  appointments.push(newAppointment);
  fs.writeFileSync(appointmentsPath, JSON.stringify(appointments, null, 2));

  res.status(201).json({
    message: 'Appointment booked successfully',
    appointment: newAppointment
  });
};

const deleteAppointment = (req, res) => {
  const { id } = req.params;
  let appointments = JSON.parse(fs.readFileSync(appointmentsPath));
  const initialLength = appointments.length;

  appointments = appointments.filter(app => app.id !== id);

  if (appointments.length === initialLength) {
    return res.status(404).json({ message: 'Appointment not found' });
  }

  fs.writeFileSync(appointmentsPath, JSON.stringify(appointments, null, 2));
  res.json({ message: 'Appointment deleted successfully' });
};

const updateAppointment = (req, res) => {
  const { id } = req.params;
  const { patientName, email, date, time } = req.body;

  let appointments = JSON.parse(fs.readFileSync(appointmentsPath));
  const index = appointments.findIndex(app => app.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Appointment not found' });
  }

  appointments[index] = {
    ...appointments[index],
    patientName: patientName || appointments[index].patientName,
    email: email || appointments[index].email,
    date: date || appointments[index].date,
    time: time || appointments[index].time
  };

  fs.writeFileSync(appointmentsPath, JSON.stringify(appointments, null, 2));
  res.json({ message: 'Appointment updated', appointment: appointments[index] });
};

module.exports = {
  bookAppointment,
  deleteAppointment,
  updateAppointment
};
