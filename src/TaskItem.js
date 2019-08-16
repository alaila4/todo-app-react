import React, { Component } from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
        var index = parseInt(this.props.index);
        this.props.removeItem(index);
    }
    onClickDone() {
        var index = parseInt(this.props.index);
        this.props.markTodoDone(index);
    }
    render() {
        var todoClass = this.props.item.done ? 
            "done" : "undone";
        return(
            <div className="container flex flex-wrap">
                <div class={todoClass} className="flex w-full cursor-pointer overflow-y-auto mt-2 hover:bg-gray-100 rounded">
                    <h1 className="my-3 mt-3 mx-2 w-3/5">{this.props.item.value}</h1>
                    <span className="flex mr-2 w-1/5 justify-end text-gray-700 hover:text-green-600" aria-hidden="true" onClick={this.onClickDone}> 
                        <i className="fas fa-check-double"></i>
                    </span>
                    <span className="flex mr-2 text-gray-700 hover:text-blue-500">
                        <i className="far fa-edit"></i>
                    </span>
                    <span className="flex text-gray-700 hover:text-red-700">
                        <i className="far fa-trash-alt"  onClick={this.onClickClose}></i>
                    </span>
                </div>
            </div>  
        );
    }
}

export default TaskItem;


// import React from 'react';

// var TaskItem = (props) => {
//     return(
//         <div className="container flex flex-wrap">
//             <div className="flex w-full cursor-pointer overflow-y-auto mt-2 hover:bg-gray-100 rounded">
//                 <h1 className="my-3 mt-3 mx-2 w-3/5">{props.title}</h1>
//                 <span className="flex mr-2 w-1/5 justify-end text-gray-700 hover:text-green-600"> 
//                     <i className="fas fa-check-double"></i>
//                 </span>
//                 <span className="flex mr-2 text-gray-700 hover:text-blue-500">
//                     <i className="far fa-edit"></i>
//                 </span>
//                 <span className="flex text-gray-700 hover:text-red-700">
//                     <i className="far fa-trash-alt"></i>
//                 </span>
                
                
               
                
                
//             </div>
//         </div>
//     )
// }

// export default TaskItem;