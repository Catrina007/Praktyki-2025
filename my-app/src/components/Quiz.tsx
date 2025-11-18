import photo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import RandomGenerator from './RandomGenerator';
import React, { use, useState } from 'react';

const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState < number > (0);
    const [score, setScore] = useState < number > (0);
    

  return (
      <div> 
       <header>
            <section className="logo-section"><img src={photo} alt="logo" className="logo-image" /></section>
            <section className="happy-worker-section"> <h3>Happy worker of the day:<RandomGenerator/> </h3></section>
        </header>
         
            <nav>
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/toDo-List">To do list</Link></li>
               <li><a href="services.html">Services</a></li>
               <li><a href="/Quiz">Quiz</a></li>
             </ul>
            </nav>
    </div>
  );
};

export default Quiz;