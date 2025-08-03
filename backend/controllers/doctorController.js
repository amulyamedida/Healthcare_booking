const fs = require('fs');
const path = require('path');

const doctorsPath = path.join(__dirname, '../data/doctors.json');

const getAllDoctors = (req, res) => {
  const doctors = JSON.parse(fs.readFileSync(doctorsPath));
  res.json(doctors);
};

const getDoctorById = (req, res) => {
  const doctors = JSON.parse(fs.readFileSync(doctorsPath));
  const doctor = doctors.find((d) => d.id === req.params.id);
  if (doctor) {
    res.json(doctor);
  } else {
    res.status(404).json({ message: 'Doctor not found' });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById
};
