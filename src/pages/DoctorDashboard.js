import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentList from '../components/AppointmentList';

const DoctorDashboard = () => {
  const doctorId = 1; // Replace with actual doctor ID from context or auth

  return (
    <div className="container mt-4">
      <h2>Doctor Dashboard</h2>
      <AppointmentList doctorId={doctorId} />
    </div>
  );
};

export default DoctorDashboard;