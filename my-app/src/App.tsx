import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RandomGenerator from './components/RandomGenerator';
import ToDo from './components/ToDo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-generator" element={<RandomGenerator />} />
        <Route path="/toDo-List" element={<ToDo />} />
      </Routes>
    </Router>
  );
};

export default App;
