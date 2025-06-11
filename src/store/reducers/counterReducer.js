import { Decrement, Increment, initialState } from "../constants/counterConstants";

export const counterReducer = (state, action) => { 
    console.log('in counter reducer'); 

    if(action.type===Increment) 
        return { ...state, counter:action.counter};
    else if(action.type===Decrement) 
        return {...state, counter:action.counter};
    else 
        return initialState;
}
