// src/components/AddMedicalRecord.js
import React, { useState } from 'react';
import { addMedicalRecord } from '../api/medicalRecordApi';

const AddMedicalRecord = () => {
  const [patientId, setPatientId] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatment, setTreatment] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMedicalRecord({ patientId, diagnosis, treatment, date });
      alert('Record added!');
      setPatientId('');
      setDiagnosis('');
      setTreatment('');
      setDate('');
    } catch (error) {
      alert('Error adding record');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add Medical Record</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Treatment"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary">Add Record</button>
      </form>
    </div>
  );
};

export default AddMedicalRecord;
