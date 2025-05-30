// src/components/AddInventoryItem.js
import React, { useState } from 'react';
import { addInventoryItem } from '../api/inventoryApi';

const AddInventoryItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addInventoryItem({ name, quantity, type, expiryDate });
      alert('Item added successfully!');
      setName('');
      setQuantity('');
      setType('');
      setExpiryDate('');
    } catch (error) {
      alert('Error adding item');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add Inventory Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input type="text" className="form-control" placeholder="Item Name" value={name}
            onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-2">
          <input type="number" className="form-control" placeholder="Quantity" value={quantity}
            onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div className="mb-2">
          <input type="text" className="form-control" placeholder="Type (Medicine/Equipment)" value={type}
            onChange={(e) => setType(e.target.value)} required />
        </div>
        <div className="mb-2">
          <input type="date" className="form-control" placeholder="Expiry Date" value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)} required />
        </div>
        <button className="btn btn-primary">Add Item</button>
      </form>
    </div>
  );
};

export default AddInventoryItem;
