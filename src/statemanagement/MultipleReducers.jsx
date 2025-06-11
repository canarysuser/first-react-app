import React, { useReducer } from 'react'


const MathReducer1 = (state, action) => {
    switch(action.type){
        case 'add': return state + action.value;
        case 'minus':return state - action.value;
        case 'multiply': return state * action.value;
        default: return state;
    }
}
const MathReducer2 = (state, action) => {
    switch(action.type){
        case 'divide': return action.value>0? state / action.value: 0;
        case 'mod':return state % action.value;
        default: return state;
    }
}
const initialValue=0; 

function MultipleReducers() {
    const [countOne, dispatchOne] = useReducer(MathReducer1, initialValue);
    const [countTwo, dispatchTwo] = useReducer(MathReducer2, 500);
  return (
    <div>
        <h4>Multiple reducers</h4>
        <p className='lead'>Current Count 1: {countOne}</p>
        <button type='button' className='btn btn-sm btn-danger' onClick={()=>dispatchOne({type:'add', value:10})}>
            Add
        </button>
        <button type='button' className='btn btn-sm btn-danger' onClick={()=>dispatchOne({type:'minus', value:10})}>
            Minus
        </button>
        <button type='button' className='btn btn-sm btn-danger' onClick={()=>dispatchOne({type:'multiply', value:10})}>
            Multiply
        </button>
        <p className='lead'>Current Count 2: {countTwo}</p>
         <button type='button' className='btn btn-sm btn-warning' onClick={()=>dispatchTwo({type:'divide', value:10})}>
            Divide
        </button>
        <button type='button' className='btn btn-sm btn-warning' onClick={()=>dispatchTwo({type:'mod', value:10})}>
            Modulus
        </button>
    </div>
  )
}

export default MultipleReducers