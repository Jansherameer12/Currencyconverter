// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Currency Converter</div>
        <ul className="flex space-x-4">
          <li className="text-white"><a href="/CurrencyConverter">Home</a></li>
          <li className="text-white"><a href="/">About</a></li>
          <li className="text-white"><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
