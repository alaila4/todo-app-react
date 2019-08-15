import React from 'react';

var TaskItem = (props) => {
    return(
        <div className="w-11/12 mr-20 cursor-pointer overflow-y-auto">
            <h1 className="text-gray-700">{props.title}</h1>   
        </div>
    )
}

export default TaskItem;