// src/pages/StaffList.js
import React, { useEffect, useState } from 'react';
import { getAllStaff } from '../api/staffApi';

const StaffList = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllStaff();
      setStaffList(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Staff Members</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.name}</td>
              <td>{staff.role}</td>
              <td>{staff.contactInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffList;
