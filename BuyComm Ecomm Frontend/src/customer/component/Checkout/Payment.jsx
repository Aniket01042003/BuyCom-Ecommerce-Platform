import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Payment() {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id")
    // useEffect(() => {
    //     navigate({search:''})
    // }, [orderId])
    
  return (
    <div>
      Paymt
    </div>
  )
}

export default Payment
