import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import { TaskProvider } from './context/TaskContext';
import './index.css';

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;