import React, {Component} from 'react';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.onClickReturn = this.onClickReturn.bind(this);
    }

    onClickReturn() {
        var index = parseInt(this.props.index);
        this.props.returnItem(index);
    }
    render () {
        // var todoClass = this.props.item.done ? 
        //     "done" : "undone";
        return(
            <li className="list-group-item ">
                <div className="container flex flex-wrap">
                    {/* <div className={todoClass}> */}
                        <div  className="flex w-full cursor-pointer overflow-y-auto mt-2 hover:bg-gray-100 rounded">
                            
                            <h1 className="my-3 mt-3 mx-2 w-3/5">{this.props.item.value}</h1>
                            <span className="flex mr-2 w-1/5 justify-end text-gray-700 hover:text-green-600" aria-hidden="true" onClick={this.onClickReturn}> 
                                <i className="fas fa-undo-alt"></i>
                            </span>
                        </div>
                    </div>
                {/* </div> */}
            </li>     
        );
    }
}

export default TodoListItem;