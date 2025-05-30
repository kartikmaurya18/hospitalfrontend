// src/api/prescriptionApi.js
import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/prescriptions';

export const getPrescriptionsByPatient = async (patientId) => {
  const response = await axios.get(`${API_BASE}/patient/${patientId}`);
  return response.data;
};

export const addPrescription = async (prescription) => {
  const response = await axios.post(API_BASE, prescription);
  return response.data;
};

export const getPrescriptionsByDoctor = async (doctorId) => {
  const response = await axios.get(`${API_BASE}/doctor/${doctorId}`);
  return response.data;
};
