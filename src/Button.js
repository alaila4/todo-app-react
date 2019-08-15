import React from 'react';

var Button = (props) =>{
    return ( 
        <button 
                className="flex-auto 
                text-center 
                font-semibold 
                rounded 
                py-3 px-4 mx-2
                bg-green-500" 
                type="button"
                onClick={props.onClick}>
                {props.text}
        </button>     
    )
}   

export default Button;