//the main functionality is to display user information and allow updates to the user's name, age, and employment status.

import React, { useState } from 'react';

function Mycomponent() {
  const [name, setName] = useState("Gust");
  const [age, setAge] = useState(20); // Changed from "Gust Age" to a number
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Tinbit");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedstatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg space-y-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800">User Info</h2>

      <div>
        <p className="text-lg text-gray-700">Name: <span className="font-semibold">{name}</span></p>
        <button
          onClick={updateName}
          className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Set Name
        </button>
      </div>

      <div>
        <p className="text-lg text-gray-700">Age: <span className="font-semibold">{age}</span></p>
        <button
          onClick={incrementAge}
          className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
        >
          Increment Age
        </button>
      </div>

      <div>
        <p className="text-lg text-gray-700">
          Is Employed: <span className="font-semibold">{isEmployed ? "Yes" : "No"}</span>
        </p>
        <button
          onClick={toggleEmployedstatus}
          className="mt-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded"
        >
          Toggle Employment Status
        </button>
      </div>
    </div>
  );
}

export default Mycomponent;
