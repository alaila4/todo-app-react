import React, { Component } from 'react';

import TodoCard from './TodoCard';
import DoneCard from './DoneCard';
import Header from './Header';
import taskData from './taskData';

class App extends Component {
    constructor (props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = {taskData: taskData};
    }
    addItem(taskData) {
        taskData.unshift({
        index: taskData.length+1, 
        value: taskData.newItemValue, 
        done: false
    });
    this.setState({taskData: taskData});
    }
    render() {
        return (
            <div id="main" className="container mx-auto flex flex-wrap">
                <Header />
                <div className="md:w-1/2">
                    <TodoCard className="mx-auto mt-4 w-full max-w-lg" addItem={this.addItem} />
                </div>
                <div className="md:w-1/2">
                    <DoneCard className="mx-auto mt-4 w-full max-w-lg" />
                </div>
            </div>
        );
    }
}

export default App;
// import React from 'react';

// import TodoCard from './TodoCard';
// import DoneCard from './DoneCard';
// import Header from './Header';
// import taskData from './taskData';





// function App() {
//   return (
//     <div className="container mx-auto flex flex-wrap">
//         <Header />
//         <div className="md:w-1/2">
//             <TodoCard className="mx-auto mt-4 w-full max-w-lg" />
//         </div>
//         <div className="md:w-1/2">
//             <DoneCard className="mx-auto mt-4 w-full max-w-lg" />
//         </div>
//     </div>
        
//   );
// }



// export default App;
