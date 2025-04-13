import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import EditTask from './EditTask';

const TaskItem = ({ task }) => {
  const { deleteTask, markAsCompleted, markAsIncomplete } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task._id);
    }
  };

  const handleToggleComplete = () => {
    if (task.completed) {
      markAsIncomplete(task._id);
    } else {
      markAsCompleted(task._id);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isEditing) {
    return <EditTask task={task} setIsEditing={setIsEditing} />;
  }

  return (
    <div className={`card ${task.completed ? 'task-complete' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Due:</strong> {formatDate(task.dueDate)}</p>
          {task.category && (
            <span style={{ 
              display: 'inline-block', 
              padding: '3px 8px', 
              backgroundColor: '#e0e0e0', 
              borderRadius: '4px', 
              fontSize: '0.8rem' 
            }}>
              {task.category}
            </span>
          )}
        </div>
        <div>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={handleToggleComplete} 
            style={{ marginRight: '10px' }}
          />
        </div>
      </div>
      <div style={{ marginTop: '15px', display: 'flex', gap: '8px' }}>
        <button 
          className="btn btn-secondary" 
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button 
          className="btn btn-danger" 
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;