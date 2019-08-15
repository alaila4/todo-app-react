import React from 'react';

import TodoCard from './TodoCard';
import DoneCard from './DoneCard';





function App() {
  return (
    <div className="container mx-auto flex flex-wrap bg-gray-100 ">
        <div className="md:w-1/2">
            <TodoCard className="mx-auto mt-4 w-full max-w-lg" />
        </div>
        <div className="md:w-1/2">
            <DoneCard className="mx-auto mt-4 w-full max-w-lg" />
        </div>
    </div>
        
  );
}



export default App;
