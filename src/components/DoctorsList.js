import React, { useEffect, useState } from 'react';
import { fetchDoctors } from '../api/doctorApi';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors()
      .then(data => setDoctors(data))
      .catch(err => console.error('Failed to fetch doctors', err));
  }, []);

  return (
    <div>
      <h3>Doctors List</h3>
      <ul>
        {doctors.map(doc => (
          <li key={doc.id}>{doc.name} - {doc.specialty}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
