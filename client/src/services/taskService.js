import apiClient from './api.js';

const taskService = {
  getTasks: (status = null, priority = null) => {
    const params = new URLSearchParams();
    if (status) params.append('status', status);
    if (priority) params.append('priority', priority);
    return apiClient.get(`/tasks?${params.toString()}`);
  },

  getTaskById: (id) => {
    return apiClient.get(`/tasks/${id}`);
  },

  createTask: (taskData) => {
    return apiClient.post('/tasks', taskData);
  },

  updateTask: (id, taskData) => {
    return apiClient.put(`/tasks/${id}`, taskData);
  },

  deleteTask: (id) => {
    return apiClient.delete(`/tasks/${id}`);
  }
};

export default taskService;
