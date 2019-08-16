import React, { Component } from 'react';
import TaskItem from './TaskItem';



class TaskList extends Component {
    render() {
        var items = props => (
    
            props.items.map((item, index) => {
                return (
                    <TaskItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
                )
            }
        ));
        
        return (
            <div className="mt-2 mx-2 ">
                <h1 className="text-gray-700 ">{items} </h1>
            </div>
        );
    }
}

export default TaskList;
// import React from 'react';
// import taskData from './taskData.js';
// import TaskItem from './TaskItem.js';

// var TaskList = () => {
//     const finalTaskList = taskData.map(task => <TaskItem title={task.title} key={task.id}/>)
    
//     return(
//         <div className="mt-2 mx-2 ">
//             <h1 className="text-gray-700 ">
//                 {finalTaskList}
//             </h1>
//         </div>
        
//     )
// }

// export default TaskList;