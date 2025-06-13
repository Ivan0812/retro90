import React from 'react';
import{ Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black text-yellow-400 p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">Retro90</h1>
          <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-white transition">Home</Link>
          </li>
          <li>
            <Link to="/popular" className="hover:text-white transition">Popular</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white transition">About</Link>
          </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;