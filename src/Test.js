import React, { useState } from 'react'

export default function Test() {
    const initialState =0;
    const[state, setState] = useState(initialState);


    return (
        <div>
            <button onClick={()=> setState(prevState => prevState + 1)}>increment</button>
            <button>{state}</button>
            <button onClick={()=> setState(prevState => prevState - 1 )}>decrement</button>

            
        </div>
    )
}

