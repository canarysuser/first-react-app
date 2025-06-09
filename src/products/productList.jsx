import React from 'react'

function ProductList(props) {


  return (
    <div className='card shadow mr-auto'>
        <div className='card-header bg-warning d-flex'>
            <h4 className='text-center text-white flex-grow-1'>Product List</h4>
            <div>
                <button className='btn btn-outline-dark text-end' type='button'
                    onClick={(e)=>props.addNewProduct()}>
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.productList.map((product, index) => (
                        <tr key={index}>
                            <td>{product.productId}</td>
                            <td>{product.productName}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td>{product.discontinued ? "Yes" : "No"}</td>
                            <td>
                                <button className='btn btn-sm btn-outline-success'
                                onClick={(e) => props.selectProduct(product.productId)}
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

export default ProductList