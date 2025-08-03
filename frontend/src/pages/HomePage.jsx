import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/doctors')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1 className="homepage-title">Healthcare Appointment</h1>
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      </div>

      <div className="doctor-grid">
        {filteredDoctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
