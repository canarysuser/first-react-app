import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router } from 'react-router';
import { createStore } from 'redux';
import { configureStore } from './store/config/store-config';
import { Provider } from 'react-redux';
import store from './store/config/rtk-config';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const store = configureStore();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


/*
//Initial State 
const initialState = { items: []}; 
//Define action types 
const ADD_ITEM = 'ADD_ITEM'; 
//Define an action creator 
function addItemActionCreator(item) { 
  return { type: ADD_ITEM, payload: item};
}
//define the reducer
function itemReducer(state, action) { 
  state = state || initialState; 
  if(action.type==ADD_ITEM) { 
    state.items.push(action.payload); 
    return {...state};
  }
  return state;
}
//Create the Store in Redux 
//Redux provides a method called createStore 
const store = createStore(itemReducer);
window.store = store;
window.addItem = addItemActionCreator; 
*/

