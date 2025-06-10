import React, { useEffect, useState } from 'react'
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';

import * as Yup from 'yup';
import Product from '../products/product';
import { Navigate, useParams } from 'react-router';
import * as service from '../products/productApi';

const FormSchema = Yup.object().shape({
    productId: Yup.number().required('Product ID is required'),
    productName: Yup.string()
        .min(3, 'Product name must be at least 3 characters long')
        .required('Product name is required'),
    unitPrice: Yup.number()
        .positive('Unit price must be a positive number')
        .required('Unit price is required'),
    unitsInStock: Yup.number()
        .integer('Units in stock must be an integer')
        .min(0, 'Units in stock cannot be negative')
        .required('Units in stock is required'),
});
const initialState = new Product(0, "", 0, 0, false);

class ProductDetailsRouted extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            canNavigateBack:false
        }
    }
    handleBackToListClick=(e) => { 
        e.preventDefault();
        this.setState({
            ...this.state,
            canNavigateBack: true
        }); 
    }
    async componentDidMount() {
        const {id} = this.props.params;
        console.log('ProductDetailsRouted componentDidMount', id);
        var product = await service.getProductById(id);
        if(product) {
            this.setState({
                ...product,
                canNavigateBack: false
            });
        } else {
            this.setState({
                ...initialState,
                canNavigateBack: false
            });
        }
    }
    render() {
        if(this.state.canNavigateBack) {
            return <Navigate to='/routed' replace={true} />
        }
        return (
            <Formik
                initialValues={{ ...this.state }}
                enableReinitialize={true}
                validationSchema={FormSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Form submitted:', values);
                    resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form className='card shadow  mr-auto w-50 m-auto'>
                        <div className='card-header bg-dark d-flex'>
                            <h4 className='text-center text-white flex-grow-1'>Product Details</h4>
                            <div>
                                <button className='btn btn-light text-end' type='button'
                                    onClick={this.handleBackToListClick}>
                                    Back to List
                                </button>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='mb-3'>
                                <label htmlFor='productId' className='form-label'>Product ID</label>
                                <Field name='productId' type='number' className='form-control' />
                                <ErrorMessage name='productId' component='div' className='text-danger' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='productName' className='form-label'>Product Name</label>
                                <Field name='productName' type='text' className={`form-control ${errors.productName && touched.productName ? 'is-invalid' : ''}`} />
                                <ErrorMessage name='productName' component='div' className='text-danger' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='unitPrice' className='form-label'>Unit Price</label>
                                <Field name='unitPrice' type='number' className={`form-control ${errors.unitPrice && touched.unitPrice ? 'is-invalid' : ''}`} />
                                <ErrorMessage name='unitPrice' component='div' className='text-danger' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='unitsInStock' className='form-label'>Units in Stock</label>
                                <Field name='unitsInStock' type='number' className={`form-control ${errors.unitsInStock && touched.unitsInStock ? 'is-invalid' : ''}`} />
                                <ErrorMessage name='unitsInStock' component='div' className='text-danger' />
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }
}
const withParams = (WrappedComponent) => (props) => { 
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
}
export default withParams(ProductDetailsRouted);