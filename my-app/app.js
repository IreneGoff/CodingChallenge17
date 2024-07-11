//U35549532


import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';
import './App.css'; // Need to add some basic styling in App.css

function App() {
  return (
    <div className="App">
      <FancyText title="true" text="Task Management and Motivation App" />
      <TaskGenerator />
      <footer>
        <p>© 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
