import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState(''); 
  const [operationHistory, setOperationHistory] = useState(''); 

  
  const handleButtonClick = (value) => {
    switch (value) {
      case '=':
        calculateResult();
        break;
      case 'AC':
        clearAll();
        break;
      case '+/-':
        toggleNegative();
        break;
      case '%':
        applyPercentage();
        break;
      case '.':
        addDecimal();
        break;
      default:
        appendValue(value);
        break;
    }
  };

  
  const appendValue = (value) => {
    setDisplayValue(prevDisplay => prevDisplay + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue); 
      setOperationHistory(displayValue + ' ='); 
      setDisplayValue(result.toString()); 
    } catch (error) {
      setDisplayValue('Error'); 
    }
  };

  const clearAll = () => {
    setDisplayValue('');
    setOperationHistory('');
  };

  
  const toggleNegative = () => {
    if (displayValue.charAt(0) === '-') {
      setDisplayValue(displayValue.slice(1)); 
    } else {
      setDisplayValue('-' + displayValue); 
    }
  };

  
  const applyPercentage = () => {
    try {
      const value = parseFloat(displayValue);
      const percentage = value / 100;
      setDisplayValue(percentage.toString());
    } catch (error) {
      setDisplayValue('Error'); 
    }
  };

const addDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(prevDisplay => prevDisplay + '.');
    }
  };

  return (
    <div className='contenedor'>
    <div className="calculator">
      <div className="superior">
        <div className="resultado">{operationHistory}</div>
        <div className="display">{displayValue}</div>
      </div>
      <div className="inferior">
        {}
        <button onClick={() => handleButtonClick('AC')} className="function">AC</button>
        <button className="function" onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button className="function" onClick={() => handleButtonClick('%')}>%</button>
        <button className="operator" onClick={() => handleButtonClick('/')}>÷</button>

        {}
        <button onClick={() => handleButtonClick('7')} className="number">7</button>
        <button onClick={() => handleButtonClick('8')} className="number">8</button>
        <button onClick={() => handleButtonClick('9')} className="number">9</button>
        <button className="operator" onClick={() => handleButtonClick('*')}>x</button>

        {}
        <button onClick={() => handleButtonClick('4')} className="number">4</button>
        <button onClick={() => handleButtonClick('5')} className="number">5</button>
        <button onClick={() => handleButtonClick('6')} className="number">6</button>
        <button className="operator" onClick={() => handleButtonClick('-')}>–</button>

        {}
        <button onClick={() => handleButtonClick('1')} className="number">1</button>
        <button onClick={() => handleButtonClick('2')} className="number">2</button>
        <button onClick={() => handleButtonClick('3')} className="number">3</button>
        <button className="operator" onClick={() => handleButtonClick('+')}>+</button>

        {}
        <button onClick={() => handleButtonClick('0')} className="numberzero">0</button>
        <button className="number" onClick={() => handleButtonClick('.')}>.</button>
        <button className="operator" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
    </div>
  );
}

export default App;

