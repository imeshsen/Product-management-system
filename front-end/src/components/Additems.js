import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Additems.css"

export default function Additems() {
    const[name,setprname] = useState();
    const[description,setdescription] = useState();

    const navigete = useNavigate();

    
    const handleclick = (e) =>{
      const data = {name,description};
        e.preventDefault();
       fetch("http://localhost:8080/api/products",{
        method:"POST",
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(data)
       }
       ).then((data)=>{alert("Data successfully entered")
      navigete("./List")})
    };

  return (
    <div className='Add'>

      <h1>Add new items</h1>
      <h4>Enter product name</h4>
      <input type={'text'} value={name} onChange={(e)=>setprname(e.target.value)} required></input>
      <h4>Enter product description</h4>
      <input type={'text'} value={description} onChange={(e)=>setdescription(e.target.value)} required></input><br/>
      <button className="btnsubmit" onClick={handleclick}>Submit</button>

    </div>
  )
}
