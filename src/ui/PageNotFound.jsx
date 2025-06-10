import React, { Component } from 'react'

export default class PageNotFound extends Component {
  render() {
    return (
      <div className='alert alert-danger'>
       <p className='display-1 text-danger'> Resource not available.</p>
       <p className='lead'>
        The page you are looking for does not exist or has been moved. Please check the URL or return to the home page.
       </p>
    </div>
    )
  }
}
