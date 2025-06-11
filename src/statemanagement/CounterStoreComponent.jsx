import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecrementAction, IncrementAction } from '../store/actions/counterActions';

function CounterStoreComponent() {

    const state = useSelector(state => state.counterReducer); 
    const dispatch = useDispatch(); 

  return (
    <div className='alert alert-success mt-5'>
        <p className='lead.'>Counter is {state.counter}</p>
        <hr/>
        <button className='btn btn-info' 
        onClick={()=>dispatch(IncrementAction(state.counter+1))}
        > Increment </button>
        <button className='btn btn-danger' 
        onClick={()=>dispatch(DecrementAction(state.counter-1))}
        > Decrement </button>
    </div>
  )
}

export default CounterStoreComponent