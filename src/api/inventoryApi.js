// src/api/inventoryApi.js
import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/inventory';

export const getAllInventory = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const addInventoryItem = async (item) => {
  const response = await axios.post(API_BASE, item);
  return response.data;
};
