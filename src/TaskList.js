import React from 'react';
import taskData from './taskData.js';
import TaskItem from './TaskItem.js';

var TaskList = () => {
    const finalTaskList = taskData.map(task => <TaskItem title={task.title}/>)
    
    return(
        <div>
            {finalTaskList}
        </div>
    )
}

export default TaskList;