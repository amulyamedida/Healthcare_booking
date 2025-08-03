const express = require('express');
const cors = require('cors');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);

app.get('/', (req, res) => {
  res.send('Healthcare Booking API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
