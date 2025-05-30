// src/components/AppointmentBooking.js
import React, { useState } from 'react';
import { bookAppointment } from '../api/patientApi';

const AppointmentBooking = ({ patientId }) => {
  const [doctorId, setDoctorId] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookAppointment({
        doctorId,
        patientId,
        appointmentDateTime: dateTime,
        status: 'PENDING',
      });
      alert('Appointment requested!');
    } catch (err) {
      console.error(err);
      alert('Failed to book appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Book Appointment</h4>
      <div className="mb-2">
        <input type="number" className="form-control" placeholder="Doctor ID"
          value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required />
      </div>
      <div className="mb-2">
        <input type="datetime-local" className="form-control"
          value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
      </div>
      <button className="btn btn-primary">Book</button>
    </form>
  );
};

export default AppointmentBooking;
