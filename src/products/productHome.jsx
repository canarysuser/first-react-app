import React, {useEffect, useState} from 'react'
import Product from './product';
import * as service from './productService';
import ProductList from './productList';
import ProductDetails from './productDetails';

function ProductHome() {

    const [productList, setProductList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(new Product(0, "", 0, 0, false));

    function loadProductsFromService() { 
        var list = service.getProducts();
        setProductList(list);
    };

    useEffect(() => {
        if(productList.length === 0 || !productList.length) 
            // Load products only if the list is empty
            loadProductsFromService();
    }, []);


    function onSelect(productId) {  
        let item = service.getProductById(productId);
        if(item) { 
            setSelectedProduct(item);
        } else { 
            setSelectedProduct(new Product(0, "", 0, 0, false));
        }
    }
    var onAddNew = (e) =>{
        let obj = new Product(0, "", 0, 0, false);
        setSelectedProduct(obj);
    }
  return (
   <div className='container mx-5'>
    <h3 className='bg-primary text-white p-2'>Product Management</h3>
    <div className='row'>
        <div className='col-6'>
           {
            productList.length? 
            <p>Total records: {productList.length}</p> :
            <p>No records to show..</p>
           }
           <ProductList productList={productList}
                        selectProduct={onSelect}
                        addNewProduct={onAddNew}/>
        </div>
        <div className='col-6'>
            <p className='fs-5'>
            { JSON.stringify(selectedProduct)}
            </p>
            <ProductDetails model={selectedProduct}/>
        </div>
   </div>
</div>
  )
}

export default ProductHome