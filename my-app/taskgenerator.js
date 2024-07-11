import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';
import './TaskGenerator.css'; // Have to add some basic styling to TaskGenerator.css

function TaskGenerator() {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleNextTask = () => {
    setCurrentTaskIndex((currentTaskIndex + 1) % tasks.length);
  };

  const handleCompleteTask = () => {
    tasks[currentTaskIndex].isCompleted = true;
    setCurrentTaskIndex((currentTaskIndex + 1) % tasks.length);
  };

  return (
    <div className="task-generator">
      <h2>Task:</h2>
      <p>{tasks[currentTaskIndex].name}</p>
      <p>Status: {tasks[currentTaskIndex].isCompleted ? 'Completed ✔' : 'Pending'}</p>
      <button onClick={handleCompleteTask}>Mark as Completed</button>
      <button onClick={handleNextTask}>Next Task</button>
      <FancyText title="false" text="Keep going! You got this!" />
    </div>
  );
}

export default TaskGenerator;
