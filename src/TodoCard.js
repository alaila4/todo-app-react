import React from 'react';
import Input from './Input';
import Button from './Button';
import taskData from './taskData';


let TodoCard = () => {


    return (
        <div className="bg-gray-200 mx-6 my-10">
            <div className="shadow-md rounded rounded-lg px-4 py-6">
             
                <h1 className="font-semibold tracking-widest text-gray-400 text-center my-2" >TODO</h1>
  
                <div className="container flex flex-wrap">
                    <div className="w-full md:w-3/4 flex">
                        <Input/>
                    </div>
                    
                    <div className="w-full md:w-1/4 flex mt-2">
                        <Button text="Añadir" onClick={handleClickAdd} />
                    </div>
                </div>


            </div>
        </div>
        
    )
}

function handleClickAdd(props) {
    taskData.push({id: taskData.length, title: props.title, active: true})
}

export default TodoCard;