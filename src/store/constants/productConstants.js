export const productInitialState ={
    items: [], 
    selectedItem: {},
    selectedId:0,
    isLoading:false,
    hasError:false, 
    errorMessage:''
}

export const GetAllBegin='BEGIN_GETALL_PRODUCTS',
             GetAllEnd='END_GETALL_PRODUCTS',
             GetByIdBegin='BEGIN_GETBYID_PRODUCT',
             GetByIdEnd='End_GETBYID_PRODUCT',
             ProductErrors='PRODUCT_ERROR';


