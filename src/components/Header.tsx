import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Scissors className="text-pink-500 mr-2" />
          <h1 className="text-2xl font-bold gradient-text">Glamour Scheduler</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-pink-500">Home</Link></li>
            <li><Link to="/calendar" className="text-gray-600 hover:text-pink-500">Book</Link></li>
            <li><Link to="/dashboard" className="text-gray-600 hover:text-pink-500">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;