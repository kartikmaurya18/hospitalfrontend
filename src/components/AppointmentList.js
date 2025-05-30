import React, { useEffect, useState } from 'react';
import { fetchAppointmentsByDoctor } from '../api/appointmentApi';

const AppointmentList = ({ doctorId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const data = await fetchAppointmentsByDoctor(doctorId);
        setAppointments(data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };

    loadAppointments();
  }, [doctorId]);

  return (
    <div>
      <h3>Upcoming Appointments</h3>
      <ul className="list-group">
        {appointments.map((appt) => (
          <li key={appt.id} className="list-group-item">
            {new Date(appt.appointmentDateTime).toLocaleString()} - Patient ID: {appt.patientId} - Status: {appt.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;