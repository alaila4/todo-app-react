import React from 'react';



let DoneCard = () => {
    return (
        <div className="bg-gray-200 mx-6 my-10">
        <div className="shadow-md rounded rounded-lg px-4 py-6">
            <h1 className="font-semibold tracking-widest text-gray-400 text-center" >DONE</h1>
            <slot></slot>
        </div>
    </div>
        
    )
}

export default DoneCard;