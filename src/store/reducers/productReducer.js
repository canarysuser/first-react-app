import { GetAllBegin, GetAllEnd, GetByIdBegin, GetByIdEnd, ProductErrors, productInitialState } from "../constants/productConstants"

export const productReducer=(state,action) => { 
    state = state || productInitialState; 
    switch(action.type) { 
        case GetAllBegin: 
            return { 
                ...state, 
                isLoading:action.isLoading, 
                hasError:action.hasError
            }
        case GetAllEnd: 
            return { 
                ...state, 
                items:action.items, 
                isLoading:action.isLoading, 
                hasError:action.hasError
            }
        case GetByIdBegin:
            return { ...state, 
                selectedId: action.selectedId,
                isLoading:action.isLoading, 
                hasError:action.hasError
            }
        case GetByIdEnd: 
            return { 
                ...state, 
                selectedItem:action.selectedItem, 
                isLoading:action.isLoading, 
                hasError:action.hasError
            }
        case ProductErrors: 
            return { 
                ...state, 
                hasError:action.hasError,
                errorMessage: action.errorMessage
            }
        default: 
            return state;
    }
}