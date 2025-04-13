import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, loading } = useContext(TaskContext);

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (tasks.length === 0) {
    return <div className="card">No tasks found. Add a task to get started!</div>;
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;