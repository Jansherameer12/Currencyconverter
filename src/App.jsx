// src/App.js

import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white h-screen">
      <Navbar/>
      <CurrencyConverter />
      <footer className='pt-24 text-center'>
        <p>&#169; 2023 -Developed by <a href="https://jansherameer12.github.io/jansherameer/">Jansher Ameer</a></p>
      </footer>
    </div>
  );
}

export default App;
