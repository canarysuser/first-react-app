import { getProducts } from "../../products/productApi";
import { GetAllBegin, GetAllEnd, GetByIdBegin, GetByIdEnd, ProductErrors } from "../constants/productConstants";


export function requestAllProducts() { 
    return {
        type: GetAllBegin,
        isLoading:true,
        hasError: false
    }
}
export function responseAllProducts(list) { 
    return { 
        type: GetAllEnd,
        isLoading: false, 
        hasError: false, 
        items: list
    }
}
export function requestById(id) { 
    return { 
        type: GetByIdBegin, 
        selectedId: id,
        isLoading:true,
        hasError: false
    }
}
export function responseById(item) { 
    return { 
        type: GetByIdEnd, 
        selectedItem: item,
        isLoading:false,
        hasError: false
    }
}

export function raiseErrors(errors) { 
    return { 
        type: ProductErrors,
        hasError: true,
        errorMessage: errors
    }
}

//Action Creator methods -- these functions would be invoked from the components 
export const getAllProducts = async (dispatch) => { 
    dispatch(requestAllProducts()); 
    try { 
        //hit the service APIs to fetch the data 
        var response = await getProducts(); 
        console.log('getAllProducts', response)
        dispatch(responseAllProducts(response));     
       
    } catch (e) { 
        dispatch(raiseErrors(e));
    }
}



