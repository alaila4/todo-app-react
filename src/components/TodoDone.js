import React, { Component } from 'react';
import TodoListItemDone from './TodoListItemDone';

class TodoDone extends Component {
    render() {
        var items = this.props.items.map((item, index) => {
            return (
                <TodoListItemDone key={index} item={item} index={index} returnItem={this.props.returnItem} />
            );
        });

        return (
            <div className="container bg-white mx-6 my-10 rounded">
                <div className="shadow-md px-4 py-6">
                    <h1 className="font-semibold tracking-widest text-green-500 text-center" >DONE</h1>
                    <ul>
                        <div className="mt-2 mx-2 ">
                            <h1 className="text-gray-700"> {items} </h1>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoDone;