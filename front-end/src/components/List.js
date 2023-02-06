import React, { useEffect, useState } from 'react'
import "./List.css"

export default function List() {
  const[product,setProduct] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/api/products/")
    .then(res=>res.json())
    .then((result)=>{
      setProduct(result);
    },[])
  }
  )

  const btndel=()=>{
    fetch("http://localhost:8080/api/products/{name}")
  }

  return (
    <div>
      {product.map(products=>(
        <p key={products.name}>
          Name:{products.name}<br/>
          Description:{products.description}<br/>
          <button className='btndels' onClick={btndel}>Delete</button>
        </p>
      )
      )}
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          
        </tr>
      </table>
    </div>
  )
}
