import React from 'react'
import Navigation from '../customer/component/navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/component/Cart/Cart'
import Footer from '../customer/component/Footer/Footer'
import PP from '../customer/component/Product/PP'
import ProductDetails from '../customer/component/ProductDetails/ProductDetails'
import Checkout from '../customer/component/Checkout/Checkout'
import Order from '../customer/component/Order/Order'
import OrderDetails from '../customer/component/Order/OrderDetails'
import PaymentSuccess from '../customer/component/Payment/PaymentSuccess'

function CustomerRoutes() {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={ <HomePage />}></Route>
                <Route path='/login' element={ <HomePage />}></Route>
                <Route path='/register' element={ <HomePage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<PP />}></Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout/' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
                <Route path='/payment/:orderId' element={<PaymentSuccess/>}></Route>
            </Routes>
        {/* <PP/> */}
        {/* <CustomerRoutes/> */}
        {/* <ProductDetails/> */}
        {/* <ProductPage/> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Order/> */}
        {/* <OrderDetails /> */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRoutes
