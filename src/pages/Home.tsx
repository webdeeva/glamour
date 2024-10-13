import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 gradient-text">Welcome to Glamour Scheduler</h1>
      <p className="text-xl mb-8">Book your cosmetology appointment with ease</p>
      <Link to="/calendar" className="gradient-button">
        Book Now
      </Link>
    </div>
  );
};

export default Home;