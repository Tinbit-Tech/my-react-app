//main function is a simple counter application that allows users to increment, decrement, and reset a count value.
// It uses React's useState hook to manage the count state and provides buttons for user interaction

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-4">
        <h1 className="text-3xl font-bold text-blue-600">Counter: {count}</h1>
        
        <div className="space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
            onClick={reset}
          >
            Reset
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
