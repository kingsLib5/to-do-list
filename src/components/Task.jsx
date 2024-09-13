import React, { useState } from 'react';

const Task = ({ task, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center my-2 p-2 border-b border-gray-200">
      <div className="flex flex-col">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="mr-2"
          />
          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="border p-1"
            />
          ) : (
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
          )}
        </div>
        {/* Display the time the task was added */}
        <span className="text-xs text-gray-500 mt-1">
          Added on: {task.createdAt || 'No time available'}
        </span>
      </div>

      <div>
        {isEditing ? (
          <button
            className="bg-green-500 text-white p-1 ml-2 rounded"
            onClick={handleEdit}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-green-500 w-[60px] text-white p-1 ml-2 rounded"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 w-[80px] text-white p-1 ml-2 rounded"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
