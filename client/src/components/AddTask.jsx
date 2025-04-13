import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    category: ''
  });
  const [error, setError] = useState('');

  const { title, description, dueDate, category } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (!title) {
      setError('Title is required');
      return;
    }

    try {
      await addTask(formData);
      setFormData({
        title: '',
        description: '',
        dueDate: '',
        category: ''
      });
      setIsFormOpen(false);
      setError('');
    } catch (err) {
      setError('Failed to add task');
    }
  };

  return (
    <div className="card">
      {!isFormOpen ? (
        <button 
          className="btn btn-primary" 
          onClick={() => setIsFormOpen(true)}
        >
          Add New Task
        </button>
      ) : (
        <form onSubmit={onSubmit}>
          <h3>Add New Task</h3>
          {error && <div className="error">{error}</div>}
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={onChange}
              placeholder="Task title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={onChange}
              placeholder="Task description"
              rows="3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="datetime-local"
              name="dueDate"
              id="dueDate"
              value={dueDate}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={onChange}
            >
              <option value="">Select Category</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Finance">Finance</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group" style={{ display: 'flex', gap: '10px' }}>
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => setIsFormOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddTask;