import React, { Component } from 'react';
import TaskList from './TaskList';
import Input from './Input';
import Button from './Button'
import taskData from './taskData';

class TodoCard extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);
    }
    // componentDidMount() {
    //     this.refs.itemName.focus();
    // }
    onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;
        
        if(newItemValue) {
            this.props.addItem({newItemValue});
            this.refs.form.reset();
        }
    }
    removeItem (itemIndex) {
        taskData.splice(itemIndex, 1);
        this.setState({taskData:taskData});
    }
    markTodoDone(itemIndex) {
        var todo = taskData[itemIndex];
        taskData.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? taskData.push(todo) : taskData.unshift(todo);
        this.setState({taskData: taskData});  
    }
    render() {
        return (
            <div className="bg-white mx-6 my-10 rounded">
                <div className="shadow-md  px-4 py-6">
                    <div className="container flex flex-wrap" onSubmit={this.onSubmit}>
                        <div className="w-full md:w-3/4 flex">
                            <Input/>
                        </div>
                        <div className="w-full md:w-1/4 flex">
                            <Button text="ADD"/>
                        </div>
                    </div>
                    <h1 className="flex font-semibold tracking-widest text-green-500 text-center ml-2 my-2 mt-10" >TO DO</h1>
                    <hr className="border border-gray-100 mx-2"></hr>

                    <TaskList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}></TaskList>

                    <button className=" w-full
                        text-center 
                        font-regular
                        rounded 
                        py-1 md:py-2 px-2 mx-1 mb-5 mt-10
                        bg-white
                        border border-red-200
                        font-light
                        text-gray-400
                        shadow
                        hover:border-red-400
                        hover:text-gray-700
                        tracking-wider" 
                        type="button">DELETE ALL</button>
                </div>
            </div>
        );
    }
}

export default TodoCard;
// import React from 'react';
// import Input from './Input';
// import Button from './Button';
// import taskData from './taskData';
// import TaskList from "./TaskList";


// let TodoCard = () => {


//     return (
//         <div className="bg-white mx-6 my-10 rounded">
//             <div className="shadow-md  px-4 py-6">
             
//                 <div className="container flex flex-wrap">
//                     <div className="w-full md:w-3/4 flex">
//                         <Input/>
//                     </div>
                    
//                     <div className="w-full md:w-1/4 flex">
//                         <Button text="ADD" onClick={handleClickAdd} />
//                     </div>
//                 </div>
                
//                 <h1 className="flex font-semibold tracking-widest text-green-500 text-center ml-2 my-2 mt-10" >TO DO</h1>
//                 <hr className="border border-gray-100 mx-2"></hr>
                
//                 <TaskList></TaskList>

            
//                 <button className=" w-full
//                     text-center 
//                     font-regular
//                     rounded 
//                     py-1 md:py-2 px-2 mx-1 mb-5 mt-10
//                     bg-white
//                     border border-red-200
//                     font-light
//                     text-gray-400
//                     shadow
//                     hover:border-red-400
//                     hover:text-gray-700
//                     tracking-wider" 
//                     type="button">DELETE ALL</button>
        


//             </div>
//         </div>
        
//     )
// }

// function handleClickAdd(props) {
//     taskData.push({id: taskData.length, title: props.title, active: true})
// }

// export default TodoCard;