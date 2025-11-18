import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RandomGenerator from './components/RandomGenerator';
import ToDo from './components/ToDo';
import Quiz from './components/Quiz';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-generator" element={<RandomGenerator />} />
        <Route path="/toDo-List" element={<ToDo />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
