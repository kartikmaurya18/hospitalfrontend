// Date formatting helpers
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

export const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleString();
};

export const formatCurrency = (amount) => {
  return `$${amount?.toFixed(2) || '0.00'}`;
};

// Search functionality
export const filterData = (data, searchTerm) => {
  if (!searchTerm) return data;
  
  return data.filter(item => 
    Object.values(item).some(value => 
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
};

// Get name by ID helpers
export const getDoctorName = (doctorId, doctors) => {
  const doctor = doctors.find(d => d.id === doctorId);
  return doctor ? doctor.name : 'Unknown Doctor';
};

export const getPatientName = (patientId, patients) => {
  const patient = patients.find(p => p.id === patientId);
  return patient ? patient.name : 'Unknown Patient';
};

// Status styling helpers
export const getStatusStyle = (status) => {
  const styles = {
    CONFIRMED: 'bg-green-100 text-green-800',
    PENDING: 'bg-yellow-100 text-yellow-800',
    CANCELLED: 'bg-red-100 text-red-800',
    COMPLETED: 'bg-blue-100 text-blue-800',
    Paid: 'bg-green-100 text-green-800',
    Pending: 'bg-red-100 text-red-800'
  };
  
  return styles[status] || 'bg-gray-100 text-gray-800';
};

// Form data helpers
export const initializeFormData = (fields, initialData = null) => {
  if (initialData) return initialData;
  
  const emptyData = {};
  fields.forEach(field => {
    emptyData[field.name] = field.type === 'number' ? 0 : '';
  });
  return emptyData;
};

// Validation helpers
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone);
};

// Low stock detection
export const isLowStock = (quantity, threshold = 20) => {
  return quantity < threshold;
};

// Generate mock ID
export const generateMockId = () => {
  return Date.now() + Math.random();
};