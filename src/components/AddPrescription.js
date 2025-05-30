// src/components/AddPrescription.js
import React, { useState } from 'react';
import { addPrescription } from '../api/prescriptionApi';

const AddPrescription = ({ doctorId, appointmentId, patientId }) => {
  const [medications, setMedications] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPrescription({
        doctorId,
        patientId,
        appointmentId,
        medications,
        instructions,
        date: new Date().toISOString().split('T')[0],
      });
      alert('Prescription added');
    } catch (err) {
      alert('Error saving prescription');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Prescription</h4>
      <div className="mb-2">
        <textarea className="form-control" rows="2" placeholder="Medications"
          value={medications} onChange={(e) => setMedications(e.target.value)} required />
      </div>
      <div className="mb-2">
        <textarea className="form-control" rows="2" placeholder="Instructions"
          value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      </div>
      <button className="btn btn-success">Submit</button>
    </form>
  );
};

export default AddPrescription;
