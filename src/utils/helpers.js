import { format, parseISO, isValid } from 'date-fns';
import { DATE_FORMATS } from './constants';

// Date utilities
export const formatDate = (date, formatString = DATE_FORMATS.DISPLAY) => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return isValid(dateObj) ? format(dateObj, formatString) : '';
};

export const getCurrentDate = () => {
  return format(new Date(), DATE_FORMATS.INPUT);
};

export const getCurrentDateTime = () => {
  return format(new Date(), "yyyy-MM-dd'T'HH:mm");
};

// String utilities
export const capitalizeFirst = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatName = (firstName, lastName) => {
  return `${firstName || ''} ${lastName || ''}`.trim();
};

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Phone number formatting
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

// Currency formatting
export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

// Age calculation
export const calculateAge = (birthDate) => {
  if (!birthDate) return '';
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

// Array utilities
export const sortByProperty = (array, property, ascending = true) => {
  return [...array].sort((a, b) => {
    const aVal = a[property];
    const bVal = b[property];
    
    if (aVal < bVal) return ascending ? -1 : 1;
    if (aVal > bVal) return ascending ? 1 : -1;
    return 0;
  });
};

export const filterBySearch = (array, searchTerm, properties) => {
  if (!searchTerm) return array;
  
  const lowerSearchTerm = searchTerm.toLowerCase();
  return array.filter(item => 
    properties.some(property => 
      item[property]?.toString().toLowerCase().includes(lowerSearchTerm)
    )
  );
};

// Status helpers
export const getStatusColor = (status) => {
  const statusColors = {
    active: 'green',
    inactive: 'red',
    pending: 'yellow',
    scheduled: 'blue',
    completed: 'green',
    cancelled: 'red',
    paid: 'green',
    overdue: 'red',
    in_stock: 'green',
    low_stock: 'yellow',
    out_of_stock: 'red'
  };
  
  return statusColors[status] || 'gray';
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Local storage helpers
export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const setToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

// Validation helpers
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone);
};