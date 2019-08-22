import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.refs.itemName.focus();
    }
    onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;
        
        if(newItemValue) {
            this.props.addItem({newItemValue});
            this.refs.form.reset();
        }
    }
    render () {
        return (
            <form ref="form" onSubmit={this.onSubmit} className="flex ">
                <input type="text" ref="itemName" 
                    className="bg-white
                    focus:outline-none 
                    focus:shadow-outline 
                    border border-gray-300 
                    rounded py-1 md:py-3 px-4
                    appearance-none leading-normal
                    flex-1 w-full md:w-3/4
                    my-2 mx-2 md:my-0"
                    placeholder="Hey! Qué harás?"/>
                <button type="submit" 
                    className="flex-1 
                    w-full md:w-1/4
                    text-center 
                    font-semibold 
                    rounded 
                    py-1 md:py-3 px-2 mx-1
                    bg-green-500
                    font-light
                    text-white
                    shadow
                    hover:bg-green-600
                    tracking-wider">
                    ADD
                </button> 
            </form>
        );   
    }
}

export default TodoForm;