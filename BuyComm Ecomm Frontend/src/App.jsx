import './App.css'
import MainCarousel from './customer/component/navigation/HomeCarousal/MainCarousel'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/component/Footer/Footer'
import Product from '../Garbage/Product'
import PP from './customer/component/Product/PP'
import ProductDetails from './customer/component/ProductDetails/ProductDetails'
import Cart from './customer/component/Cart/Cart'
import Checkout from './customer/component/Checkout/Checkout'
import Order from './customer/component/Order/Order'
import OrderDetails from './customer/component/Order/OrderDetails'
import OrderTracker from './customer/component/Order/OrderTracker'
import CustomerRoutes from './Routers/CustomerRoutes'
import { Route, Routes } from 'react-router-dom'
import AdminRoutes from './Routers/AdminRoutes'

function  App() {

  return (
    <>
      <div className="">
        <Routes>
          <Route path='/*' element={<CustomerRoutes />} ></Route>
          <Route path='/admin/*' element={<AdminRoutes />} ></Route>
        </Routes>  
      </div>
    </>
  )
}

export default App
