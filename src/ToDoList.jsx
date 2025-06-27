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
            setNewTask(""); // Clear the input field
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
        <><div>
            <h2>To-Do List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} onClick={() => RemoveTask(index)}>
                        {task}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Enter a new task" />
            <button className='add-button' onClick={AddTask}>Add Task</button>
        </div><ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                       <span className='task'>{task}</span>
                        <button className='remove-button' onClick={() => RemoveTask(index)}>Remove</button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                ))}
            </ol></>
       
    );
}
export default ToDoList;