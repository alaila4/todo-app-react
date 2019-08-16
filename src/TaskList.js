import React from 'react';
import taskData from './taskData.js';
import TaskItem from './TaskItem.js';

var TaskList = () => {
    let finalTaskList = taskData.map(task => <TaskItem title={task.title} key={task.id}/>)
    console.log('TaskList' + taskData);
    return(
        <div>
            {finalTaskList}
        </div>
    )
}

export default TaskList;