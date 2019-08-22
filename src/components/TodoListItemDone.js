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

        return(
            <li className="list-group-item ">
                <div className="container flex flex-wrap my-3 mt-3">

                        <div  className="flex w-full overflow-y-auto mt-2 hover:bg-gray-100 rounded">
                            
                            <div className="flex-1">
                                <h1>{this.props.item.value}</h1>
                            </div>                            

                            <div>
                                <span className="px-2 text-gray-700 hover:text-green-600" 
                                    aria-hidden="true" 
                                    onClick={this.onClickReturn}>

                                    <i className="fas fa-undo-alt"></i>
                                </span>
                            </div>
                        </div>
                    </div>
            </li>     
        );
    }
}

export default TodoListItem;