import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import LoginSingup from './Pages/LoginSingup'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Shop from './Pages/Shop'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory/>} category="mens"/>
          <Route path='/womens' element={<ShopCategory/>} category="women"/>
          <Route path='/kids' element={<ShopCategory/>} category="kids"/>

          <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSingup/>}/>
      </Routes>
        

      </BrowserRouter>
    </div>
  )
}

export default App