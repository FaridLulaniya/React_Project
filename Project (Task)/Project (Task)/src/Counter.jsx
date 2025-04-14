import { useState, useEffect } from 'react';
import './Counter.css'; // We'll create this CSS file next

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const increment = () => {
    setCount(prev => prev + 1);
    animate();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    animate();
  };

  const reset = () => {
    setCount(0);
    animate();
  };

  const animate = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Change color based on count value
  const getCounterColor = () => {
    if (count > 0) return 'text-green-500';
    if (count < 0) return 'text-red-500';
    return 'text-gray-700';
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Modern Counter</h1>
      
      <div className={`counter-display ${getCounterColor()} ${isAnimating ? 'scale' : ''}`}>
        {count}
      </div>
      
      <div className="counter-buttons">
        <button 
          className="counter-button decrement"
          onClick={decrement}
          aria-label="Decrement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        
        <button 
          className="counter-button reset"
          onClick={reset}
          aria-label="Reset"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        
        <button 
          className="counter-button increment"
          onClick={increment}
          aria-label="Increment"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      
      <div className="counter-footer">
        <p className="counter-hint">Click buttons to change the value</p>
      </div>
    </div>
  );
};

export default Counter;