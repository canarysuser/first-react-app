import { configureStore, createSlice } from '@reduxjs/toolkit';
import Product from '../../products/product';
import logger from 'redux-logger';

const productInitialState = {
    items: [], 
    selectedItem: {},
    isLoading:true,
    hasError:false
}
//create slices 
const pSlice = createSlice({
    name: 'products',
    initialState: productInitialState,
    reducers: {
        getAll: (state, {payload}) => { 
            console.log('payload', payload.items)
            state.items = payload.items;
        },
        getById: (state, item) => { 
            state.selectedItem = item;
        }
    }
})
export const { 
    getAll: getAllProductActionCreator,
    getById: getByIdProductActionCreator
} = pSlice.actions;

const reducer = { 
    products: pSlice.reducer
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV!=='production'
})
/*getDefaultMiddlewares: 
//1. Immutability Check --> Immer library
    - does a deep comparison of state values for changes/mutations 
//2. Serializability Check 
    - deep check of the state tree for non-serializable values [ functions/promises ]
//3. Action Creator middleware 
    - adds action creator methods 
//4. Thunk 
    - redux thunk 
//5. Custom logger - added manually 
*/
export default store;