import React from 'react';

function Input() {
  return (
    <div className="flex mx-0">
        <input 
            type="text" 
            className="bg-gray-100
                focus:outline-none 
                focus:shadow-outline 
                border border-gray-300 
                rounded-lg py-2 px-4 my-4 mx-4
                appearance-none leading-normal
                flex-auto" 
            placeholder="Hey! Que harás?"/>
    </div>
  );
}

export default Input;