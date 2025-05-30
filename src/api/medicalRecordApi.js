// src/api/medicalRecordApi.js
import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/medical-records';

export const getAllMedicalRecords = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const addMedicalRecord = async (record) => {
  const response = await axios.post(API_BASE, record);
  return response.data;
};
