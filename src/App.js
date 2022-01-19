import React from "react"
import {BrowserRouter as Router ,Routes,Route, } from "react-router-dom"
import Home from "./layout/home"
import Shops from "./layout/shopcomponet"
import Product from "./singal products/singelproducts"
import Cart from "./Cart/cart"
import Order from "./Order/order"
import Massage from "./Massage/massage"




const App =() => {
    
    return(
        <Router>
          <Routes>
             <Route  path='/' element={< Home/> }></Route>
             <Route  path='/home' element={< Home/> }></Route>
             <Route  path='/shop' element={< Shops/> }></Route>
             <Route  path='/singleproduct' element={< Product/> }></Route>
             <Route  path='/cart' element={< Cart/> }></Route>
             <Route  path='/Order' element={< Order/> }></Route>
             <Route  path='/massage' element={<  Massage /> }></Route>
           
          </Routes>
          </Router>
    )
}
export default App;