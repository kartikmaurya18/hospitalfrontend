// Mock API service (replace with actual axios calls to your backend)
const api = {
  baseURL: 'http://localhost:8080/api',
  
  // Generic CRUD operations
  get: async (endpoint) => {
    // Mock data - replace with actual API calls
    const mockData = {
      '/doctors': [
        { id: 1, name: 'Dr. Sarah Wilson', email: 'sarah@hospital.com', phoneNumber: '555-0101', specialty: 'Cardiology' },
        { id: 2, name: 'Dr. Michael Chen', email: 'michael@hospital.com', phoneNumber: '555-0102', specialty: 'Neurology' },
        { id: 3, name: 'Dr. Emily Davis', email: 'emily@hospital.com', phoneNumber: '555-0103', specialty: 'Pediatrics' }
      ],
      '/patients': [
        { id: 1, name: 'John Smith', email: 'john@email.com', phoneNumber: '555-1001', dateOfBirth: '1985-03-15', medicalHistory: 'Hypertension' },
        { id: 2, name: 'Mary Johnson', email: 'mary@email.com', phoneNumber: '555-1002', dateOfBirth: '1990-07-22', medicalHistory: 'Diabetes Type 2' },
        { id: 3, name: 'Robert Brown', email: 'robert@email.com', phoneNumber: '555-1003', dateOfBirth: '1978-11-08', medicalHistory: 'Asthma' }
      ],
      '/appointments': [
        { id: 1, appointmentDateTime: '2024-12-01T10:00:00', status: 'CONFIRMED', doctorId: 1, patientId: 1 },
        { id: 2, appointmentDateTime: '2024-12-01T14:30:00', status: 'PENDING', doctorId: 2, patientId: 2 },
        { id: 3, appointmentDateTime: '2024-12-02T09:15:00', status: 'CONFIRMED', doctorId: 3, patientId: 3 }
      ],
      '/prescriptions': [
        { id: 1, dateIssued: '2024-11-20', medicines: 'Lisinopril', dosage: '10mg daily', doctorId: 1, patientId: 1 },
        { id: 2, dateIssued: '2024-11-21', medicines: 'Metformin', dosage: '500mg twice daily', doctorId: 2, patientId: 2 }
      ],
      '/billing': [
        { id: 1, amount: 150.00, billingDate: '2024-11-20', paymentStatus: 'Paid', doctorId: 1, patientId: 1 },
        { id: 2, amount: 200.00, billingDate: '2024-11-21', paymentStatus: 'Pending', doctorId: 2, patientId: 2 }
      ],
      '/inventory': [
        { id: 1, name: 'Surgical Masks', quantity: 500, supplier: 'MedSupply Inc' },
        { id: 2, name: 'Stethoscopes', quantity: 25, supplier: 'HealthTech Corp' },
        { id: 3, name: 'Blood Pressure Monitors', quantity: 15, supplier: 'MedEquip Ltd' }
      ],
      '/staff': [
        { id: 1, name: 'Alice Cooper', role: 'Nurse', department: 'Emergency', salary: 65000, contactNumber: '555-2001', email: 'alice@hospital.com' },
        { id: 2, name: 'Bob Miller', role: 'Admin', department: 'Administration', salary: 55000, contactNumber: '555-2002', email: 'bob@hospital.com' }
      ]
    };
    
    return new Promise(resolve => {
      setTimeout(() => resolve({ data: mockData[endpoint] || [] }), 300);
    });
  },
  
  post: async (endpoint, data) => {
    return new Promise(resolve => {
      setTimeout(() => resolve({ data: { id: Date.now(), ...data } }), 300);
    });
  },
  
  put: async (endpoint, data) => {
    return new Promise(resolve => {
      setTimeout(() => resolve({ data }), 300);
    });
  },
  
  delete: async (endpoint) => {
    return new Promise(resolve => {
      setTimeout(() => resolve({ data: { success: true } }), 300);
    });
  }
};

export default api;