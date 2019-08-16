import React, {Component} from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import todoItems from './todoItems';
import TodoHeader from './TodoHeader';
import TodoDone from './TodoDone';
import todoItemsDone from './todoItemsDone';

class TodoApp extends Component {
    constructor (props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);
        this.returnItem = this.returnItem.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
        this.state = {todoItems: todoItems};
    }
    addItem(todoItem) {
        todoItems.unshift({
        index: todoItems.length+1, 
        value: todoItem.newItemValue, 
        done: false
    });
    this.setState({todoItems: todoItems});
    }
    removeItem (itemIndex) {
        todoItems.splice(itemIndex, 1);
        this.setState({todoItems: todoItems});
    }
    markTodoDone(itemIndex) {
        var todo = todoItems[itemIndex];
        todoItems.splice(itemIndex, 1);
        todo.done = !todo.done;
        // todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
        todoItemsDone.push(todo);
        this.setState({todoItems: todoItems});
    }

    returnItem(itemIndex) {
        var todo = todoItemsDone[itemIndex];
        todoItemsDone.splice(itemIndex, 1);
        todoItems.push(todo);
        this.setState({todoItems: todoItems});
    }

    deleteItems() {
        todoItems.splice(0, todoItems.length);
        this.setState({todoItems: todoItems});
    }

    render() {
        return (
            <div>
                <div>
                    <TodoHeader />
                </div>
                

                <div container flex>
                    <div className="bg-white mx-6 my-10 rounded shadow-md  px-4 py-6">
                        <TodoForm addItem={this.addItem} />
                        <h1 className="flex font-semibold tracking-widest text-green-500 text-center ml-2 my-2 mt-10" >TO DO</h1>
                        <hr className="border border-gray-100 mx-2"></hr>
                        <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
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
                            type="button"
                            onClick={this.deleteItems}>
                            DELETE ALL
                        </button>             
                    </div>

                    <div>
                        <TodoDone items={todoItemsDone} returnItem={this.returnItem}/>
                    </div>
                </div>
                
                
                
            </div>
            
        );
    }
}

export default TodoApp;