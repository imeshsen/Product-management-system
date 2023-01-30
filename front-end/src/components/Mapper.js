import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Additems from './Additems'
import List from './List'

export default function Mapper() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Additems/>}></Route>
            <Route path='/list' element={<List/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
