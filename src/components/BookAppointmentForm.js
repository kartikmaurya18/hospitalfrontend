import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createAppointment } from '../api/appointmentApi';

const BookAppointmentForm = ({ patientId }) => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [datetime, setDatetime] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/doctors');
        setDoctors(res.data);
      } catch (err) {
        console.error('Failed to load doctors', err);
      }
    };
    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAppointment({
        appointmentDateTime: datetime,
        doctorId: selectedDoctor,
        patientId,
        status: 'PENDING',
      });
      alert('Appointment requested!');
      setDatetime('');
      setSelectedDoctor('');
    } catch (err) {
      console.error('Booking failed', err);
      alert('Failed to book appointment');
    }
  };

  return (
    <div className="mb-4">
      <h4>Book Appointment</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Doctor</label>
          <select
            className="form-control"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
            <option value="">Select a doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                Dr. {doc.name} - {doc.specialty}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Date & Time</label>
          <input
            type="datetime-local"
            className="form-control"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointmentForm;
