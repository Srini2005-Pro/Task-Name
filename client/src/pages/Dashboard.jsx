import React, { useContext } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { TaskContext } from '../context/TaskContext';

const Dashboard = () => {
  const { error } = useContext(TaskContext);

  return (
    <div className="container">
      <header>
        <h1>Task Mate</h1>
        <p>Manage your tasks efficiently</p>
      </header>

      {error && <div className="error card">{error}</div>}

      <div className="filter-container">
        <SearchBar />
        <CategoryFilter />
      </div>

      <AddTask />
      
      <TaskList />
    </div>
  );
};

export default Dashboard;