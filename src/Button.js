import React from 'react';

var Button = (props) =>{
    return ( 
        <button 
                className="flex-1 
                text-center 
                font-semibold 
                rounded 
                py-1 md:py-3 px-2 mx-1
                bg-green-500
                font-light
                text-white
                shadow
                hover:bg-green-600
                tracking-wider" 
                type="submit"
                onClick={props.onClick}>
                <i className="fas fa-plus"></i> {props.text}
        </button>     
    )
}   

export default Button;