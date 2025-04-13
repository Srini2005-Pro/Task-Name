import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const EditTask = ({ task, setIsEditing }) => {
  const { editTask } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    title: task.title || '',
    description: task.description || '',
    dueDate: task.dueDate ? new Date(task.dueDate).toISOString().slice(0, 16) : '',
    category: task.category || ''
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
      await editTask(task._id, formData);
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update task');
    }
  };

  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h3>Edit Task</h3>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={onChange}
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
            Update Task
          </button>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;