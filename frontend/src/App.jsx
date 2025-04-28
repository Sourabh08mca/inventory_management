import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ProductForm from './component/ProductForm'
import ProductList from './component/ProductList'
import UpdateForm from './component/UpdateForm'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<ProductList/>}></Route>
          <Route path='/form' element={<ProductForm/>}></Route>
          <Route path='/update/:id' element={<UpdateForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
