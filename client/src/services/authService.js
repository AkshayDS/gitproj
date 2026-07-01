import apiClient from './api.js';

const authService = {
  register: (name, email, password) => {
    return apiClient.post('/auth/register', { name, email, password });
  },

  login: (email, password) => {
    return apiClient.post('/auth/login', { email, password });
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  getToken: () => {
    return localStorage.getItem('authToken');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  },

  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};

export default authService;
