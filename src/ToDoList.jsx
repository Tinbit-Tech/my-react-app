import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function AddTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function RemoveTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      setTasks(newTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
      setTasks(newTasks);
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">To-Do List</h2>

      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
          className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          onClick={AddTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded"
          >
            <span className="text-gray-700">{task}</span>
            <div className="flex gap-2">
              <button
                onClick={() => RemoveTask(index)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                Remove
              </button>
              <button
                onClick={() => moveTaskUp(index)}
                className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
              >
                Up
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                Down
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
