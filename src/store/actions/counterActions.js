import { Decrement, Increment } from "../constants/counterConstants";

//Counter Action Creator methods 
export function IncrementAction(value) { 
    return {type: Increment, counter:value}
}
export function DecrementAction(value) { 
    return {type:Decrement, counter:value}
}
