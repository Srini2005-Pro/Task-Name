import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

export const editTask = async (id, updatedTask) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;
};

export const deleteTask = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export const toggleTaskCompletion = async (id, completed) => {
    const response = await axios.patch(`${API_URL}/${id}`, { completed });
    return response.data;
};

export const searchTasks = async (query) => {
    const response = await axios.get(`${API_URL}?search=${query}`);
    return response.data;
};

export const filterTasksByCategory = async (category) => {
    const response = await axios.get(`${API_URL}?category=${category}`);
    return response.data;
};