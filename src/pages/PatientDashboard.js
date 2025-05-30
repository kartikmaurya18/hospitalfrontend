// src/pages/PatientDashboard.js
import React from 'react';
import AppointmentBooking from '../components/AppointmentBooking';
import PatientAppointments from '../components/PatientAppointments';

const PatientDashboard = () => {
  const patientId = 1; // Replace with actual patient ID from auth/context

  return (
    <div className="container mt-4">
      <h2>Patient Dashboard</h2>
      <AppointmentBooking patientId={patientId} />
      <hr />
      <PatientAppointments patientId={patientId} />
    </div>
  );
};

export default PatientDashboard;
