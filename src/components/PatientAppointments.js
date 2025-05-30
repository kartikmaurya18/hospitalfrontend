// src/components/PatientAppointments.js
import React, { useEffect, useState } from 'react';
import { fetchAppointmentsByPatient } from '../api/patientApi';

const PatientAppointments = ({ patientId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchAppointmentsByPatient(patientId);
      setAppointments(data);
    };
    loadAppointments();
  }, [patientId]);

  return (
    <div>
      <h4>My Appointments</h4>
      <ul className="list-group">
        {appointments.map((appt) => (
          <li key={appt.id} className="list-group-item">
            {new Date(appt.appointmentDateTime).toLocaleString()} - Doctor ID: {appt.doctorId} - Status: {appt.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientAppointments;
