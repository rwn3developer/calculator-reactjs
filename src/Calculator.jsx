import React, { useState } from 'react';
import './Calculator.css'; // Optional: CSS for styling

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    if (displayValue === '0') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleClearButtonClick = () => {
    setDisplayValue('0');
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue); // Use eval to evaluate the expression
      console.log(result);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="7">7</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="8">8</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="9">9</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="/">/</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="4">4</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="5">5</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="6">6</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="*">*</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="1">1</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="2">2</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="3">3</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="+">+</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value="0">0</button>
        <button onClick={ (e) => handleButtonClick(e.target.value) } value=".">.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClearButtonClick}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
