import React from 'react';



let DoneCard = () => {
    return (
        <div className="bg-white mx-6 my-10 rounded">
            <div className="shadow-md px-4 py-6">
                <h1 className="font-semibold tracking-widest text-green-500 text-center" >DONE</h1>
                <slot></slot>
            </div>
        </div>
        
    )
}

export default DoneCard;