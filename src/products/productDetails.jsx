import React, { use, useEffect } from 'react'
import Product from './product';

const initialState = new Product(100, "100", 100, 100, false);

function ProductDetails(props) {
    let [model, setModel] = React.useState({...props.model});
    let [formErrors, setFormErrors] = React.useState({
        productName:'',
        unitPrice:'',
        unitsInStock:''
    });
    var handleChange = (e) => {
        e.preventDefault(); 
        let { name, value } = e.target;
        console.log(name, value);
        setModel({
            ...model,
            [name]: value
        });
    }
    var handleSubmit = (e) => {
        e.preventDefault();
        
        if(model.productName.length < 3) {
            setFormErrors({
                ...formErrors,
                productName: 'Product name must be at least 3 characters long'
            });
            return;
        } 
        setFormErrors({
            productName: '',
            unitPrice: '',
            unitsInStock: ''
        });

        props.onSubmit(model);


        console.log('handleSubmit called');
    }

    useEffect(() => {
        if(model.productId !== props.model.productId) {
            console.log('useEffect called');
            setModel({...props.model});
    }
    }, [props]);

    return (
        <div className='card shadow mr-auto'>
            <div className='card-header bg-info d-flex'>
                <h4 className='text-center text-white flex-grow-1'>Product Details</h4>
                
            </div>
            <div className='card-body'>
                   
                <form id='form1' onSubmit={handleSubmit}>
                    <input type='hidden' 
                        className='form-control' 
                        id='productId'
                        name='productId'
                        value={model.productId}/>
                    <label htmlFor='productName'>Product Name</label>
                    <input type='text' 
                        className='form-control' 
                        id='productName'
                        name='productName'
                        value={model.productName}
                        onChange={handleChange} />
                    {formErrors.productName && <div className='text-danger'>{formErrors.productName}</div>}
                    <label htmlFor='unitPrice'>Unit Price</label>
                    <input type='text' 
                        className='form-control' 
                        id='unitPrice'
                        name='unitPrice'
                        value={model.unitPrice}
                        onChange={handleChange} />
                    <label htmlFor='unitsInStock'>Stock</label>
                    <input type='text' 
                        className='form-control' 
                        id='unitsInStock'
                        name='unitsInStock'
                        value={model.unitsInStock}
                        onChange={handleChange} />
                    <label htmlFor='discontinued'>Discontinued ? </label>
                    <input type='checkbox' 
                        className='form-checkbox' 
                        id='discontinued'
                        name='discontinued'
                        value={model.discontinued}
                        onChange={handleChange} />
                <div className='form-group'>
                <button type='submit' 
                        className='btn btn-primary mt-2'
                        >Save</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default ProductDetails