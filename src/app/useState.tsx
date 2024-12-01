"use client"
import { useState } from "react";

export default function UseState() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-sm border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">UseState Counter</h1>
        <p className="text-4xl font-bold text-blue-600 mb-6">{counter}</p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleIncrement} 
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md shadow-md">
            Increment
          </button>
          <button 
            onClick={handleDecrement} 
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md shadow-md">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
