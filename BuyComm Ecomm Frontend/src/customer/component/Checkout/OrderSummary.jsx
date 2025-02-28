import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Cart from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../Redux/order/Action';
import CartItem from '../Cart/CartItem';
import { Button } from '@mui/material';
import { createPayment } from '../../../Redux/Payment/Action';

function OrderSummary() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { order } = useSelector(store => store)
  const orderId = searchParams.get("order_id")
  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])

  const handleCheckOut=()=>{
    dispatch(createPayment(orderId));
  }


  return (
    <div  >
      <div className="p-4 flex shadow-lg rounded-s-md">
        <div className='w-[59%] '>
          <AddressCard data={order.order?.shippingAddress[0]} />
        </div>
        <div className=' w-[40%] shadow-md h-[19rem]'>
          <div className='w-[100%] p-7'>
            <div className='uppercase font-bold opacity-60 pb-4'>Price Details</div>
            <div className="flex ar mx-[1rem] ">
              <div> Price ({order.order?.totalItem} item)</div>
              <div className='text-green-600'>₹{order.order?.totalPrice}</div>
            </div>
            <div className="flex ar mx-[1rem]">
              <span>Discount</span>
              <span className='text-green-600'>-₹{order.order?.discounte}</span>
            </div>
            <div className="flex ar mx-[1rem]">
              <span> Delivery Charges</span>
              <span className='text-green-600'>Free</span>
            </div>
            <div className="flex ar mx-[1rem]">
              <span>Total Amount</span>
              <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='  checkcl mt-5'>
        <hr />
        {/* <Cart /> */}
        <div className=' col-span-2' >
          {
            order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))
          }
        </div>
        <div className='' >
          <Button
            sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}
            size="large"
            variant="contained"
            onClick={handleCheckOut}
          >
            Pay
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
