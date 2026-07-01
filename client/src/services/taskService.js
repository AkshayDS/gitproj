import axios from 'axios';
import authService from './authService';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const taskService = {
  getTasks: async () => {
    try {
      const token = authService.getToken();
      const response = await axios.get(`${API_BASE_URL}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getTaskById: async (taskId) => {
    try {
      const token = authService.getToken();
      const response = await axios.get(`${API_BASE_URL}/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  createTask: async (taskData) => {
    try {
      const token = authService.getToken();
      const response = await axios.post(`${API_BASE_URL}/tasks`, taskData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  updateTask: async (taskId, taskData) => {
    try {
      const token = authService.getToken();
      const response = await axios.put(`${API_BASE_URL}/tasks/${taskId}`, taskData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  deleteTask: async (taskId) => {
    try {
      const token = authService.getToken();
      const response = await axios.delete(`${API_BASE_URL}/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default taskService;
