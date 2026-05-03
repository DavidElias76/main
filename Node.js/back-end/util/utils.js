
// In util.js - it contains utility functions that can be reused across different parts of an application
// It is used in data/time helpers, string formatiing, validation functions, Mah helpers, and API response matters

const getCurrentDate = () => new Date().toISOString();

const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

// Exporting multiple items with ES6 syntax
export { getCurrentDate, formatCurrency };