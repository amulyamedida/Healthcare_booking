import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [id]);

  if (!doctor) return <p>Loading...</p>;

  return (
    <div className="doctor-profile">
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <h2>{doctor.name}</h2>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Qualification:</strong> {doctor.qualification}</p>
      <p><strong>Experience:</strong> {doctor.experience} years</p>
      <Link to={`/book/${doctor.id}`} className="book-btn">Book Appointment</Link>
    </div>
  );
};

export default DoctorProfile;
