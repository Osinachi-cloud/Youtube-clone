import React, { useReducer } from 'react'

const initialState = {
    firstCount:0,
    secondCount:10

}
// console.l og(initialState.secondCount)

const reducer=(state, action)=> {
    switch(action.type){
        case "increment":
             return {...state, firstCount: state.firstCount + action.value};
        
        case "decrement":
            return {...state,firstCount: state.firstCount - action.value};
            case "increment2":
                return {...state, secondCount: state.secondCount + action.value};
           
           case "decrement2":
               return {...state, secondCount: state.secondCount - action.value};

            case "reset":
            return initialState
        
            default: 
           return  state
    }
} 
console.log(initialState.firstCount)
// console.log(state)


function Test3() {

   const[count, dispatch]= useReducer(reducer, initialState)


    return (
        <div>
            <h2>Count1 -{count.firstCount} </h2>
            <h2>Count2 -{count.secondCount} </h2>

            <button onClick={() => dispatch({ type:'increment', value:5})}>Increment</button>
            <button onClick={() =>dispatch({type:'decrement', value:5})}>decrement</button>

            <button onClick={()=>dispatch({type:'increment2', value:1})}>Increment by 1</button>
            <button onClick={()=>dispatch({type:'decrement2', value:1})}>decrement by 1</button>

            <button onClick={()=>dispatch({type:'reset'})}>reset</button>

            
        </div>
    )
}

export default Test3
