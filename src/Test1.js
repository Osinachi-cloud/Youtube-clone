import React, { useState } from 'react'

export default function Test() {
    const initialState ={
        firstName: "" ,
        lastName:""
    };
    const[state, setState] = useState(initialState);


    return (
        <div>
            <h2> my first name is {state.firstName}</h2>
            <input type="text" value={state.firstName} onChange={e=> setState({ ...state, firstName: e.target.value})} />
            <h2>my second name name is {state.secondName}</h2>
            <input type="text" value={state.secondName}  onChange={e=> setState({ ...state, secondName:e.target.value})}/>
            
        </div>
    )
}

