import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const CategoryFilter = () => {
  const { filterTasksByCategory } = useContext(TaskContext);

  const categories = [
    "All",
    "Work",
    "Personal",
    "Shopping",
    "Health",
    "Education",
    "Finance",
    "Other"
  ];

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (category === 'All') {
      // Fetch all tasks
      filterTasksByCategory('');
    } else {
      filterTasksByCategory(category);
    }
  };

  return (
    <div>
      <select 
        onChange={handleCategoryChange} 
        defaultValue="All"
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;