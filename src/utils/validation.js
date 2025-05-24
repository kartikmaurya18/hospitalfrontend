// Validation rules
export const validationRules = {
  required: (value) => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return 'This field is required';
    }
    return null;
  },
  
  email: (value) => {
    if (!value) return null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return null;
  },
  
  phone: (value) => {
    if (!value) return null;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(value)) {
      return 'Please enter a valid phone number';
    }
    return null;
  },
  
  minLength: (min) => (value) => {
    if (!value) return null;
    if (value.length < min) {
      return `Must be at least ${min} characters long`;
    }
    return null;
  },
  
  maxLength: (max) => (value) => {
    if (!value) return null;
    if (value.length > max) {
      return `Must be no more than ${max} characters long`;
    }
    return null;
  },
  
  number: (value) => {
    if (!value) return null;
    if (isNaN(value)) {
      return 'Must be a valid number';
    }
    return null;
  },
  
  positiveNumber: (value) => {
    if (!value) return null;
    if (isNaN(value) || Number(value) <= 0) {
      return 'Must be a positive number';
    }
    return null;
  },
  
  date: (value) => {
    if (!value) return null;
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return 'Please enter a valid date';
    }
    return null;
  },
  
  futureDate: (value) => {
    if (!value) return null;
    const date = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) {
      return 'Date must be in the future';
    }
    return null;
  },
  
  pastDate: (value) => {
    if (!value) return null;
    const date = new Date(value);
    const today = new Date();
    
    if (date > today) {
      return 'Date must be in the past';
    }
    return null;
  }
};

// Form validation schemas
export const doctorSchema = {
  firstName: [validationRules.required],
  lastName: [validationRules.required],
  email: [validationRules.required, validationRules.email],
  phone: [validationRules.required, validationRules.phone],
  specialization: [validationRules.required],
  licenseNumber: [validationRules.required]
};

export const patientSchema = {
  firstName: [validationRules.required],
  lastName: [validationRules.required],
  email: [validationRules.email],
  phone: [validationRules.required, validationRules.phone],
  dateOfBirth: [validationRules.required, validationRules.date, validationRules.pastDate],
  address: [validationRules.required]
};

export const appointmentSchema = {
  patientId: [validationRules.required],
  doctorId: [validationRules.required],
  date: [validationRules.required, validationRules.date, validationRules.futureDate],
  time: [validationRules.required],
  reason: [validationRules.required]
};

export const staffSchema = {
  firstName: [validationRules.required],
  lastName: [validationRules.required],
  email: [validationRules.required, validationRules.email],
  phone: [validationRules.required, validationRules.phone],
  role: [validationRules.required],
  department: [validationRules.required]
};

export const inventorySchema = {
  name: [validationRules.required],
  category: [validationRules.required],
  quantity: [validationRules.required, validationRules.positiveNumber],
  unit: [validationRules.required],
  reorderLevel: [validationRules.required, validationRules.positiveNumber],
  expiryDate: [validationRules.date]
};

export const prescriptionSchema = {
  patientId: [validationRules.required],
  doctorId: [validationRules.required],
  medication: [validationRules.required],
  dosage: [validationRules.required],
  frequency: [validationRules.required],
  duration: [validationRules.required]
};

export const billingSchema = {
  patientId: [validationRules.required],
  amount: [validationRules.required, validationRules.positiveNumber],
  description: [validationRules.required],
  dueDate: [validationRules.required, validationRules.date]
};

// Validation function
export const validateForm = (data, schema) => {
  const errors = {};
  
  for (const field in schema) {
    const rules = schema[field];
    const value = data[field];
    
    for (const rule of rules) {
      const error = rule(value);
      if (error) {
        errors[field] = error;
        break; // Stop at first error for this field
      }
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Field validation function for real-time validation
export const validateField = (value, rules) => {
  for (const rule of rules) {
    const error = rule(value);
    if (error) {
      return error;
    }
  }
  return null;
};