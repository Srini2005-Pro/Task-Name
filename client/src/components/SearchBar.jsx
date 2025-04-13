import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const SearchBar = () => {
  const { searchTasks } = useContext(TaskContext);
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    searchTasks(query);
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ flex: '1' }}
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
};

export default SearchBar;