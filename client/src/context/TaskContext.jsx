import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/tasks');
        setTasks(res.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch tasks');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Add a new task
  const addTask = async (task) => {
    try {
      const res = await axios.post('/api/tasks', task);
      setTasks([...tasks, res.data]);
      return res.data;
    } catch (err) {
      setError('Failed to add task');
      console.error(err);
      throw err;
    }
  };

  // Edit an existing task
  const editTask = async (id, updatedTask) => {
    try {
      const res = await axios.put(`/api/tasks/${id}`, updatedTask);
      setTasks(tasks.map(task => task._id === id ? res.data : task));
      return res.data;
    } catch (err) {
      setError('Failed to update task');
      console.error(err);
      throw err;
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError('Failed to delete task');
      console.error(err);
      throw err;
    }
  };

  // Mark task as completed
  const markAsCompleted = async (id) => {
    try {
      const res = await axios.patch(`/api/tasks/${id}/complete`);
      setTasks(tasks.map(task => task._id === id ? res.data : task));
      return res.data;
    } catch (err) {
      setError('Failed to update task status');
      console.error(err);
      throw err;
    }
  };

  // Mark task as incomplete
  const markAsIncomplete = async (id) => {
    try {
      const res = await axios.patch(`/api/tasks/${id}/incomplete`);
      setTasks(tasks.map(task => task._id === id ? res.data : task));
      return res.data;
    } catch (err) {
      setError('Failed to update task status');
      console.error(err);
      throw err;
    }
  };

  // Search tasks
  const searchTasks = async (query) => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/tasks/search?query=${query}`);
      setTasks(res.data);
      setError(null);
    } catch (err) {
      setError('Search failed');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Filter tasks by category
  const filterTasksByCategory = async (category) => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/tasks/category/${category}`);
      setTasks(res.data);
      setError(null);
    } catch (err) {
      setError('Filter failed');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      loading,
      error,
      addTask,
      editTask,
      deleteTask,
      markAsCompleted,
      markAsIncomplete,
      searchTasks,
      filterTasksByCategory
    }}>
      {children}
    </TaskContext.Provider>
  );
};