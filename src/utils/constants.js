// User roles
export const USER_ROLES = {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT'
};

// Appointment statuses
export const APPOINTMENT_STATUSES = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

// Payment statuses
export const PAYMENT_STATUSES = {
  PENDING: 'Pending',
  PAID: 'Paid',
  OVERDUE: 'Overdue'
};

// Default user names by role
export const DEFAULT_USER_NAMES = {
  ADMIN: 'Admin User',
  DOCTOR: 'Dr. Smith',
  PATIENT: 'John Doe'
};

// Menu items for different user roles
export const MENU_ITEMS = {
  ADMIN: [
    { id: 'dashboard', label: 'Dashboard', icon: 'Activity' },
    { id: 'doctors', label: 'Doctors', icon: 'Users' },
    { id: 'patients', label: 'Patients', icon: 'Users' },
    { id: 'appointments', label: 'Appointments', icon: 'Calendar' },
    { id: 'staff', label: 'Staff', icon: 'Users' },
    { id: 'inventory', label: 'Inventory', icon: 'Package' },
    { id: 'billing', label: 'Billing', icon: 'DollarSign' }
  ],
  DOCTOR: [
    { id: 'dashboard', label: 'Dashboard', icon: 'Activity' },
    { id: 'appointments', label: 'My Appointments', icon: 'Calendar' },
    { id: 'patients', label: 'My Patients', icon: 'Users' },
    { id: 'prescriptions', label: 'Prescriptions', icon: 'FileText' }
  ],
  PATIENT: [
    { id: 'dashboard', label: 'Dashboard', icon: 'Activity' },
    { id: 'appointments', label: 'My Appointments', icon: 'Calendar' },
    { id: 'prescriptions', label: 'My Prescriptions', icon: 'FileText' },
    { id: 'billing', label: 'My Bills', icon: 'DollarSign' }
  ]
};

// API endpoints
export const API_ENDPOINTS = {
  DOCTORS: '/doctors',
  PATIENTS: '/patients',
  APPOINTMENTS: '/appointments',
  STAFF: '/staff',
  INVENTORY: '/inventory',
  PRESCRIPTIONS: '/prescriptions',
  BILLING: '/billing'
};

// Common validation rules
export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
  MIN_PASSWORD_LENGTH: 6
};