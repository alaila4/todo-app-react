import React from 'react';

let TodoCard = () => {
    return (
        <div className="bg-white shadow-lg p-4 rounded rounded-lg overflow-y-auto ">
            <slot></slot>
        </div>
    )
}

export default TodoCard;