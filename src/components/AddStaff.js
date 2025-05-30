// src/components/AddStaff.js
import React, { useState } from 'react';
import { addStaff } from '../api/staffApi';

const AddStaff = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStaff({ name, role, contactInfo });
      alert('Staff added!');
      setName('');
      setRole('');
      setContactInfo('');
    } catch (error) {
      alert('Error adding staff');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add Staff Member</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Contact Info"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary">Add Staff</button>
      </form>
    </div>
  );
};

export default AddStaff;
