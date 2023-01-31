import React, { useEffect, useState } from 'react'

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
  return (
    <div>
      {product.map(products=>(
        <p key={products.name}>
          Name:{products.name}<br/>
          Description:{products.description}<br/>
          <button>Delete</button>
        </p>
      )
      )}
    </div>
  )
}
