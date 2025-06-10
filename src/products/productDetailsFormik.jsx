import React, { useEffect, useState } from 'react'
import { 
    Formik, 
    Form, 
    Field, 
    ErrorMessage 
} from 'formik';

import * as Yup from 'yup';
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

function ProductDetailsFormik(props) {

     let [model, setModel] = React.useState({...props.model});
     useEffect(() => {
            //if(model.productId !== props.model.productId) {
            console.log('useEffect called');
                setModel({...props.model});
        //}
        }, [props.model.productId]);
  return (
    <Formik
      initialValues={{...model}}
      enableReinitialize={true}
      validationSchema={FormSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('Form submitted:', values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className='card shadow mr-auto'>
          <div className='card-header bg-info d-flex'>
            <h4 className='text-center text-white flex-grow-1'>Product Details</h4>
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

export default ProductDetailsFormik