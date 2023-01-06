import './btn.css';
import React from 'react'

const Admin = ({title}) => {
  return (
    <div className='d-flex justify-content-end m-5'>
      <button type='button' className='btn btn-primary'>{title}</button>
    </div>
  )
}

export default Admin