import React from 'react';
import Button from './Button';
import taskData from './taskData.js';

function App() {
  return (
    <div className="flex">
    </div>
  );
}

function handleClickAdd(props) {
    taskData.push({id: taskData.length, title: props.title, active: true})
}

export default App;
