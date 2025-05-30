// src/pages/MedicalRecordList.js
import React, { useEffect, useState } from 'react';
import { getAllMedicalRecords } from '../api/medicalRecordApi';

const MedicalRecordList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllMedicalRecords();
      setRecords(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Medical Records</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.patient?.name || 'Unknown'}</td>
              <td>{record.diagnosis}</td>
              <td>{record.treatment}</td>
              <td>{record.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalRecordList;
