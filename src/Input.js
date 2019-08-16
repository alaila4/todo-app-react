import React from 'react';
// import TaskList from './TaskList';
// import taskData from './taskData';

class Input extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {value: ''};

    //     this._handleKeyDown = this._handleKeyDown.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    // }

    // _handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         if(this.state.value !== ''){
    //             this.setState({value: e.target.value});
    //             this.sendTask();
    //         }
    //     }
    // }

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }

    // sendTask(){
    //     // TaskList task = new TaskList();
    //     // task.receiveTask(this.state.value);
    //     taskData.push({id: taskData.length, title: this.state.value, active: true})
    //     TaskList();

    // }
    
    render(){
        return (

            <input 
                type="text" 
                className="bg-white
                    focus:outline-none 
                    focus:shadow-outline 
                    border border-gray-300 
                    rounded py-1 md:py-3 px-4
                    appearance-none leading-normal
                    flex-1
                    my-2 mx-2 md:my-0"
                // value={this.state.value} 
                placeholder="Hey! Qué harás?"
                // onKeyDown={this._handleKeyDown}
                // onChange={this.handleChange}
                />
    
        );
    }
    
}

export default Input;