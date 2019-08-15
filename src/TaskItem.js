import React from 'react';

let TaskItem = (props) => {
    return (
        <div>
            <h1 className="text-gray-700">{props.task.title}</h1>            
        </div>
    )
}

export default TaskItem;