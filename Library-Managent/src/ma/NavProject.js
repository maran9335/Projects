import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Menu from './Menu'
import ProductList from './ProductList'
import Fromapi from './Fromapi'
import ProductView from './ProductView'
import Login from './Login'
import TableFormat from './TableFormat'
import Update from './Update'


function NavProject() {
  return (
    <div>
      <BrowserRouter>
      <Menu></Menu>
     <Routes>
     <Route path='/' element={<ProductList/>}></Route>
     <Route path='/:id' element={<ProductView/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/form' element={<Fromapi/>}></Route>
     <Route path='/form/table' element={<TableFormat/>}></Route>
     <Route path='/form/table/:id' element={<Update/>}></Route>
     </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavProject
