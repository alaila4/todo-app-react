import React from 'react';

function Input() {
  return (
    <div>
        <input 
            type="text" 
            className="bg-white 
                focus:outline-none 
                focus:shadow-outline 
                border border-gray-300 
                rounded-lg py-2 px-4 my-4 mx-4
                appearance-none leading-normal" 
            placeholder="Hey! Que harás?"/>
    </div>
  );
}

export default Input;