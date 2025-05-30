// src/pages/HomePage.js
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to the Hospital Management System</h1>
      <div className="mt-4">
        <Link to="/doctor" className="btn btn-primary m-2">Doctor Dashboard</Link>
        <Link to="/patient" className="btn btn-success m-2">Patient Dashboard</Link>
        <Link to="/admin" className="btn btn-warning m-2">Admin Dashboard</Link>
      </div>
    </div>
  );
};

export default HomePage;