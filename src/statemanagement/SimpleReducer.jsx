import React, { useReducer, useState } from 'react'


//the initial state
const initialState = {
  counter: 1
}

//const actions that need to be performed
const INCREMENT= 'INCREMENT';
const DECREMENT='DECREMENT';
const MULTIPLY='MULTIPLY';
//action object typocally is created as 
//{ type: 'TypeOfAction', payload?: {....}}

//the reducer function that takes the current state and an action
//the reducer function is a pure function that returns a new state
//it should not mutate the current state
//reducer function should not return undefined or null. 
const MyReducer = (state, action) => {
    state = state || initialState; //if state is undefined, use initialState
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case MULTIPLY:
      return { ...state, counter: state.counter * 2 };
    default:
      return state;
  }
}

function MultiplyComponent() {
    const [state, dispatch] = useReducer(MyReducer, initialState);
    return (
        <div className='bg-secondary opacity-50 p-3 text-white'>
            <h4>Multiply Component</h4>
            <p>Counter Value: {state.counter}</p>
            <button className='btn btn-success' onClick={() => dispatch({ type: INCREMENT })}> + </button>
            <button className='btn btn-success' onClick={() => dispatch({ type: DECREMENT })}> - </button>
            <button className='btn btn-danger' onClick={() => dispatch({ type: MULTIPLY })}> *2 </button>
        </div>
    )
}

function SimpleReducer() {
    const [counter, setCounter] = useState(0); 
    //subscriber to the reducer function
    const [state, dispatch] = useReducer(MyReducer, initialState);

  return (
    <div className='card shadow mt-5 m-auto w-50'>
        <div className='card-header bg-warning text-white'>
            <h3>Simple Reducer Example</h3>
        </div>
        <div className='card-body'>
            <h4>Without Reducers</h4>
            <p>Counter Value: {counter}</p>
            <button className='btn btn-primary' onClick={() => setCounter(counter + 1)}> + </button>
            <button className='btn btn-primary' onClick={() => setCounter(counter - 1)}> - </button>
            <hr/>
            <h4>With Reducers</h4>
            <p>Counter Value: {state.counter}</p>
            <button className='btn btn-success' onClick={() => dispatch({ type: INCREMENT })}> + </button>
            <button className='btn btn-success' onClick={() => dispatch({ type: DECREMENT })}> - </button>
            <hr/>
            <MultiplyComponent />
        </div>
    </div>
  )
}

export default SimpleReducer