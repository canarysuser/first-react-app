import React, { use, useEffect } from 'react'
import Product from './product';

const initialState = new Product(100, "100", 100, 100, false);

function ProductDetails(props) {
    let [model, setModel] = React.useState({...props.model});
    var handleChange = (e) => {
        e.preventDefault(); 
        let { name, value } = e.target;
        console.log(name, value);
        setModel({
            ...model,
            [name]: value
        });
    }
    useEffect(() => {
        //if(model.productId !== props.model.productId) {
        console.log('useEffect called');
            setModel({...props.model});
    //}
    }, [props.model.productId]);

    return (
        <div className='card shadow mr-auto'>
            <div className='card-header bg-info d-flex'>
                <h4 className='text-center text-white flex-grow-1'>Product Details</h4>
                
            </div>
            <div className='card-body'>
                <form id='form1'>
                    <label htmlFor='productId'>Product ID</label>
                    <input type='text' 
                        className='form-control' 
                        id='productId'
                        name='productId'
                        value={model.productId}
                        onChange={handleChange} />
                </form>
            </div>
        </div>
    )
}

export default ProductDetails