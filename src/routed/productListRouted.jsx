import React, { useState, useEffect } from 'react'
import * as service from '../products/productApi';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../store/actions/productActions';
import { getAllProductActionCreator } from '../store/config/rtk-config';

function ProductListRouted(props) {
    const state = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [productList, setProductList] = useState([]);
    const navigator = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //     async function loadProductsAsync() {
        //     if (!productList.length || productList.length < 1) {
        //         var list = await service.getProducts();
        //         setProductList(list);
        //     }
        // }   
        //     loadProductsAsync();
        async function loadProductsAsync() {
            if (isLoading) {
                
                //await getAllProducts(dispatch); //store method
                var items = await service.getProducts(); 
                dispatch(getAllProductActionCreator({items:items}));
                var id=setTimeout(()=>{
                    //setProductList(state.items);
                    //console.log(state.items);
                    setIsLoading(false);
                    console.log(state);
                   // id.clearTimeout();
                }, 3000);
            
               
            }
        }
        loadProductsAsync();
        
    }, [isLoading]);

    var selectProduct = (productId) => {
        //soft navigate to another component passing the productId to it. 
        navigator({ pathname: `/routed/${productId}` });
    }

    if (isLoading) {
         
        return <div className='display-1 text-center'>....Loading.....</div>
    }
    return (
        <div className='card shadow mr-auto w-75 m-auto'>
            <div className='card-header bg-warning d-flex'>
                <h4 className='text-center text-white flex-grow-1'>Product List</h4>
                <div>
                    <button className='btn btn-outline-dark text-end' type='button'
                        onClick={(e) => props.addNewProduct()}>
                        Add New
                    </button>
                </div>
            </div>
            <div className='card-body'>
                <table className='table table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Available</th>
                            <th>Ops</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          state.items &&  state.items.map((product, index) => (
                                <tr key={product.productId}>
                                    <td>{product.productId}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>{product.discontinued ? "Yes" : "No"}</td>
                                    <td>
                                        <button className='btn btn-sm btn-outline-success'
                                            onClick={(e) => selectProduct(product.productId)}
                                        >Select</button>
                                        <button className='btn btn-sm btn-outline-danger'
                                        >Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductListRouted