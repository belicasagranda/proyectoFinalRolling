import React from 'react'
import './tabla.css'

const Tabla = ({primerCol , segCol , terCol , cuarCol , quinCol}) => {
  return (
    <div className='table-responsive'>
      <table className="table table-info">
        <thead>
          <tr>
            <th>{primerCol}</th>
            <th>{segCol}</th>
            <th>{terCol}</th>
            <th>{cuarCol}</th>
            <th>{quinCol}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tabla