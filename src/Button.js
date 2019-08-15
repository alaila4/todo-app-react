import React from 'react';

var Button = (props) =>{
    return ( 
        <button 
                className="flex-1 
                text-center 
                font-semibold 
                rounded 
                py-3 px-4 mx-1
                bg-green-500
                font-light
                text-white" 
                type="button"
                onClick={props.onClick}>
                {props.text}
        </button>     
    )
}   

export default Button;