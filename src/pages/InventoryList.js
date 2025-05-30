// src/pages/InventoryList.js
import React, { useEffect, useState } from 'react';
import { getAllInventory } from '../api/inventoryApi';

const InventoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getAllInventory();
      setItems(data);
    };
    load();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Inventory List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.type}</td>
              <td>{item.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
