import React from 'react';
import Input from './Input';


let TodoCard = () => {
    return (
        <div className="bg-gray-200 mx-6 my-10">
            <div className="shadow-md rounded rounded-lg px-4 py-6">
                <h1 className="font-semibold tracking-widest text-gray-400 text-center" >TODO</h1>
                <Input className=""/>
            </div>
        </div>
        
    )
}

export default TodoCard;