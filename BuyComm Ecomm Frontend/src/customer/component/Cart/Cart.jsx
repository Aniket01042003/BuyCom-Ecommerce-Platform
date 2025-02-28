import React, { useEffect } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../Redux/Cart/Action';


function Cart() {
  const dispatch = useDispatch();
  const {cart} = useSelector(store => store);
  const count = 0;
  const navigate = useNavigate();
  
  const handleCheckOut = ()=>{
    navigate("/checkout?step=1")
  }

  useEffect(() => {
    dispatch(getCart())
  }, [cart.deleteCartItem,cart.updateCartItem])
  



  return (
    <div className='flex cartar relative'>
      <div className=''>
        {cart.cart?.cartItems.map((item)=><CartItem item={item} />)}
        
        {/* <CartItem />
        <CartItem />
        <CartItem /> */}
      </div>
      <div className=' w-[30rem] h-[40vh] top-[0] sticky' >
        <div className='relative top-[1rem] flex flex-col align-center'>
          <p className='uppercase font-bold opacity-60 pb-4' >Price Details</p>
          <hr />
          <div className='w-[100%]'>
            <div className="flex ar mx-[1rem] ">
              <div> Price ({cart.cart?.totalItem} item)</div>
              <div className='text-green-600'>₹{cart.cart?.totalPrice}</div>
            </div>
            <div className="flex ar mx-[1rem]">
              <span>Discount</span>
              <span className='text-green-600'>-₹{cart.cart?.discounte}</span>
            </div>
            <div className="flex ar mx-[1rem]">
              <span> Delivery Charges</span>
              <span className='text-green-600'>Free</span>
            </div>
            <div className="flex ar mx-[1rem]">
              <span>Total Amount</span>
              <span className='text-green-600'>₹{cart.cart?.totalDiscountedPrice}</span>
            </div>
          </div>
          <hr />
          <button onClick={handleCheckOut} className='btn cb text-white font-semibold rounded-lg mt-[2rem] w-[60%] h-[2rem] bg-[#9155fd]' >Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
