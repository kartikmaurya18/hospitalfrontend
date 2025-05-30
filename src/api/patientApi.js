// src/api/patientApi.js
import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/appointments';

export const fetchAppointmentsByPatient = async (patientId) => {
  const response = await axios.get(`${API_BASE}/patient/${patientId}`);
  return response.data;
};

export const bookAppointment = async (appointmentData) => {
  const response = await axios.post(API_BASE, appointmentData);
  return response.data;
};
