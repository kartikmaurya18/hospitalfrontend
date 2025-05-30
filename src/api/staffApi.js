// src/api/staffApi.js
import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/staff';

export const getAllStaff = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const addStaff = async (staff) => {
  const response = await axios.post(API_BASE, staff);
  return response.data;
};
