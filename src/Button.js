import React from 'react';

let Button = (props) =>{
    return ( 
        <button 
                className="flex-auto 
                text-center 
                font-semibold 
                rounded 
                py-3 px-4 mx-2
                bg-green-500" 
                type="button">
                {props.text}
        </button>     
    )
}   

export default Button;