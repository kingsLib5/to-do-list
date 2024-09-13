import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  return (
    <ul className="mt-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
