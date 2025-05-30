// src/pages/PatientPrescriptions.js
import React, { useEffect, useState } from 'react';
import { getPrescriptionsByPatient } from '../api/prescriptionApi';

const PatientPrescriptions = ({ patientId }) => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getPrescriptionsByPatient(patientId);
      setPrescriptions(data);
    };
    loadData();
  }, [patientId]);

  return (
    <div className="container mt-4">
      <h2>My Prescriptions</h2>
      <ul className="list-group">
        {prescriptions.map((p) => (
          <li key={p.id} className="list-group-item">
            <strong>Doctor:</strong> {p.doctorId} <br />
            <strong>Date:</strong> {new Date(p.date).toLocaleDateString()} <br />
            <strong>Medications:</strong> {p.medications} <br />
            <strong>Instructions:</strong> {p.instructions}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientPrescriptions;
