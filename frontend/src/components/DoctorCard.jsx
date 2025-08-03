import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  return (
    <Link to={`/doctor/${doctor.id}`} className="doctor-card">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="doctor-image"
      />
      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
    </Link>
  );
};

export default DoctorCard;
