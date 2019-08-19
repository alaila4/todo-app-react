import React, {Component} from 'react';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onClickClose() {
        var index = parseInt(this.props.index);
        this.props.removeItem(index);
    }

    onClickDone() {
        var index = parseInt(this.props.index);
        this.props.markTodoDone(index);
    }

    onClickEdit(){
        var index = parseInt(this.props.index);
        this.props.setActiveEditInput(index);
    }

    componentDidMount() {
        this.refs.itemName.focus();
    }

    onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;
        
        if(newItemValue) {
            var index = parseInt(this.props.index);
            this.props.editItem({value: newItemValue, itemIndex: index});
            this.refs.form.reset();
        }
    }

    render () {
        // var todoClass = this.props.item.done ? 
        //     "done" : "undone";
        return(
            <li className="list-group-item ">
                <div className="container flex flex-wrap my-3 mt-3">
                    <form ref="form" onSubmit={this.onSubmit} className="container flex ">
                        <input type="text" ref="itemName"
                            style = {this.props.item.editMode ? {} : {display: "none"}} 
                            className="bg-white
                            focus:outline-none 
                            focus:shadow-outline 
                            border border-gray-300 
                            rounded py-1 md:py-3 px-4
                            appearance-none leading-normal
                            flex-1 w-full md:w-3/4
                            my-2 mx-2 md:my-0"
                            />
                    </form>
                    {/* <div className={todoClass}> */}
                        <div  className="flex w-full cursor-pointer overflow-y-auto mt-2 hover:bg-gray-100 rounded"
                            style = {this.props.item.editMode ? {display: "none"} : {}}>                            
                            
                            <h1 className="mx-2 w-3/5">{this.props.item.value}</h1>

                            <span className="flex mr-2 w-1/5 justify-end text-gray-700 hover:text-green-600" aria-hidden="true" onClick={this.onClickDone}> 
                                <i className="fas fa-check-double"></i>
                            </span>
                            <span className="flex mr-2 text-gray-700 hover:text-blue-500">
                                <i className="far fa-edit" onClick={this.onClickEdit}></i>
                            </span>
                            <span className="flex text-gray-700 hover:text-red-700">
                                <i className="far fa-trash-alt"  onClick={this.onClickClose}></i>
                            </span>
                        </div>
                    </div>
                {/* </div> */}
            </li>     
        );
    }
}

export default TodoListItem;