// src/api/appointmentApi.js
import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/appointments';

export const fetchAppointmentsByDoctor = async (doctorId) => {
  const response = await axios.get(`${API_BASE}/doctor/${doctorId}`);
  return response.data;
};

export const createAppointment = async (appointmentData) => {
  const response = await axios.post(API_BASE, appointmentData);
  return response.data;
};

export const cancelAppointment = async (appointmentId) => {
  const response = await axios.delete(`${API_BASE}/${appointmentId}`);
  return response.data;
};