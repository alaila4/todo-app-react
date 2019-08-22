import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <div className="container mx-auto flex items-center flex-col h-32 mx-2 px-2 my-2 py-2"> 
                <div className="mt-8" >
                    {/* <img src={type_logo.png} className="max-w-xs object-contain"  alt="logo" /> */}
                </div>
            
            
                <div className="mt-4">
                    <h1 className="text-xl text-center text-5xl text-gray-500">Todo App</h1>
                </div> 
            </div> 
        )
    }
}
 export default Header