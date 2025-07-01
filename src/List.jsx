import React from 'react';

function List() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Orange", calories: 55 },
    { id: 4, name: "Mango", calories: 60 },
    { id: 5, name: "Grapes", calories: 70 }
  ];

                                     // Sort fruits by highest calories first
  fruits.sort((a, b) => b.calories - a.calories);

  // Map each fruit into a styled list item
  const listItems = fruits.map((fruit) => (
    <li
      key={fruit.id}
      className="bg-white rounded-md shadow p-4 mb-3 text-gray-800 hover:bg-blue-50 transition-all duration-200"
    >
      <span className="font-semibold">{fruit.name}</span>:&nbsp;
      <span className="text-blue-600 font-bold">{fruit.calories} cal</span>
    </li>
  ));

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Fruit Calorie List</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default List;
