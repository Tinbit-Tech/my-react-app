// the main functionality is to create a user form with fields for name, age, payment method, and shipping method.
// It uses React's useState hook to manage the state of each input field and displays the current values dynamically.
// The form includes input fields for name and age, a select dropdown for payment method, and radio buttons for shipping method.

import React, { useState } from 'react';

function Mycomponebt2() {
  const [name, setName] = useState("Gust");
  const [age, setAge] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("delivered");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">User Form</h2>

      <div>
        <label className="block text-sm font-medium text-gray-600">Name:</label>
        <input
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-gray-500 mt-1">Hello, {name}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Age:</label>
        <input
          value={age}
          onChange={handleAgeChange}
          placeholder="Enter your age"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-gray-500 mt-1">Your age: {age}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Payment Method:</label>
        <input
          value={payment}
          onChange={handlePaymentChange}
          placeholder="Enter your payment method"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={payment}
          onChange={handlePaymentChange}
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select an option</option>
          <option value="Tele Birr">Tele Birr</option>
          <option value="CBE">CBE</option>
        </select>
        <p className="text-gray-500 mt-1">Selected: {payment}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Shipping Method:</label>
        <div className="space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="pick up"
              checked={shipping === "pick up"}
              onChange={handleShippingChange}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Pick Up</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="delivered"
              checked={shipping === "delivered"}
              onChange={handleShippingChange}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Delivered</span>
          </label>
        </div>
        <p className="text-gray-500 mt-1">Chosen: {shipping}</p>
      </div>
    </div>
  );
}

export default Mycomponebt2;
