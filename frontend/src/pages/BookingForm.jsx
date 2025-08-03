import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ patientName: '', email: '', date: '', time: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.Base_URL}/api/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, doctorId: id }),
    });
    navigate('/confirmation');
  };

  return (
    <div className="booking-form">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input name="patientName" placeholder="Your Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Your Email" required onChange={handleChange} />
        <input name="date" type="date" required onChange={handleChange} />
        <input name="time" type="time" required onChange={handleChange} />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;