// src/components/CurrencyConverter.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import arrow from '../assets/arrow.svg'
import { BiSolidArrowToBottom } from "react-icons/bi";

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${fromCurrency}`
        );
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchData();
  }, [fromCurrency]);

  useEffect(() => {
    if (exchangeRates[toCurrency]) {
      const result = (amount * exchangeRates[toCurrency]).toFixed(2);
      setConvertedAmount(result);
    }
  }, [amount, exchangeRates, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className='relative mt-16 text-center w-[400px] py-8 mx-auto bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 p-4 m-2 rounded'>
      <h1 className='text-center text-xl my-2 font-bold uppercase'>Welcome to Currency Converter</h1>
      <div className=' flex justify-center gap-2 rounded  items-center pb-4'>
        
        <input className='border outline-none text-black px-2 h-[30px] w-[150px] rounded' type="number" value={amount} onChange={handleAmountChange} />
        <label className='py-2 uppercase font-semibold '><select className='h-[30px] rounded outline-none text-black' value={fromCurrency} onChange={handleFromCurrencyChange}>
          {Object.keys(exchangeRates).map((currency) => (
            <option className='text-black' key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select></label>
      </div>
      <div>
        {/* <img className='w-[30px] border-2 border-white rounded-full absolute left-[65%]  top-[55%]' src={arrow} alt="" /> */}
        <span className='text-[30px] absolute top-[54%] left-[63%]'><BiSolidArrowToBottom/></span>
      </div>
      <div className='flex  justify-center items-center gap-2 '>
        
        <label className='bg-white h-[30px] text-justify px-2 w-[150px] text-black rounded'>{convertedAmount}</label>
        <label className='py-2 uppercase font-semibold '><select className='border rounded outline-none text-black h-[30px]' value={toCurrency} onChange={handleFromCurrencyChange}>
          {Object.keys(exchangeRates).map((currency) => (
            <option className='text-black' key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select></label>
      </div>
      
     
      
    </div>
  );
};

export default CurrencyConverter;
