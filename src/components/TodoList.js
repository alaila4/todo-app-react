import React, {Component} from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    render() {
        var items = this.props.items.map((item, index) => {
            return (
              <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} 
              markTodoDone={this.props.markTodoDone}
              setActiveEditInput={this.props.setActiveEditInput}
              editItem={this.props.editItem}
              />
            );
        });
        return (
            <ul>
                <div className="mt-2 mx-2 ">                    
                    <h1 className="text-gray-700"> {items} </h1>
                </div>
            </ul>
            
        );
    }
}

export default TodoList;