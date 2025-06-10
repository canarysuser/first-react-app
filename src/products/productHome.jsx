import React, { useEffect, useState } from 'react'
import Product from './product';
import * as service from './productService';
import ProductList from './productList';
import ProductDetails from './productDetails';

import * as apiService from './productApi';

function ProductHome() {

    const [productList, setProductList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(new Product(0, "", 0, 0, false));

    function loadProductsFromService() {
        var list = service.getProducts();
        setProductList(list);
    };



    useEffect(() => {
        async function loadProductsAsync() {
            if (productList.length === 0 || !productList.length) {
                var list = await apiService.getProducts();
                setProductList(list);
            }
        }
        loadProductsAsync();
        // if(productList.length === 0 || !productList.length) 
        //     // Load products only if the list is empty
        //     loadProductsFromService();
        
    }, [selectedProduct]);


async function onSelect(productId) {
    //let item = service.getProductById(productId);
    let item = await apiService.getProductById(productId);
   
    
        setSelectedProduct(item);
         console.log(item);
    
}
var onAddNew = (e) => {
    let obj = new Product(0, "", 0, 0, false);
    setSelectedProduct(obj);
}
var onSubmit = async (model) => {
   // service.upsert(model);
   await apiService.upsert(model);
    setSelectedProduct(new Product(0, "", 0, 0, false)); // Reset the form
    //loadProductsFromService(); // Reload the product list
    var list = await apiService.getProducts();
    setProductList(list); // Update the product list with the latest data
}
return (
    <div className='container mx-5'>
        <h3 className='bg-primary text-white p-2'>Product Management</h3>
        <div className='row'>
            <div className='col-6'>
                {
                    productList.length ?
                        <p>Total records: {productList.length}</p> :
                        <p>No records to show..</p>
                }
                <ProductList productList={productList}
                    selectProduct={onSelect}
                    addNewProduct={onAddNew} />
            </div>
            <div className='col-6'>
                <p className='fs-5'>
                    {JSON.stringify(selectedProduct)}
                </p>
                <ProductDetails model={selectedProduct}
                    onSubmit={onSubmit} />
                {/* <ProductDetailsFormik model={selectedProduct}
                    onSubmit={onSubmit}/> */}
            </div>
        </div>
    </div>
)
}

export default ProductHome