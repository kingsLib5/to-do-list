import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 flex justify-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 p-2 rounded-l-lg w-2/3 focus:outline-none"
        placeholder="Enter a task..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
