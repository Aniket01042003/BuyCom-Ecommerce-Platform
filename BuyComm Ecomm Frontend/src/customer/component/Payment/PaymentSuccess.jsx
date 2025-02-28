import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../Redux/order/Action';
import { updatePayment } from '../../../Redux/Payment/Action';
import { Alert, AlertTitle, Grid, Grid2 } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import { useParams } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
// import {HomeIcon, PhoneIcon} from '@mui/icons-material';/

const PaymentSuccess = () => {

    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState()
    const { orderId } = useParams();

    const dispatch = useDispatch();
    const { order } = useSelector(store => store);

    console.log("order ", order.order);
    // console.log("order img ",order.order?.orderItems[0].product.imageUrl);
    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get("razorpay_payment_id"))
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"))
    }, [])

    useEffect(() => {
        if (paymentId) {
            const data = { orderId, paymentId };
            dispatch(getOrderById(orderId));
            dispatch(updatePayment(data));

        }
    }, [orderId, paymentId, dispatch])



    return (
        <div className='px-2 lg:px-36' >
            <div className="flex flex-col justify-center items-center">
                <Alert
                    variant='filled'
                    severity='success'
                    sx={{ mb: 6, width: "fit-content" }}
                >
                    <AlertTitle>Payment Success </AlertTitle>
                    Congratulation Your order Get Placed
                </Alert>
                <OrderTracker activeStep={1} />

                <Grid2 container className='space-y-5 py-5 pt-20'>
                    {order.order?.orderItems.map((item) => <Grid2 constainer item className=''
                        sx={{ alignItems: "center", justifyContent: "space-between" }}
                    >
                        <div className='flex shadow w-[80vw]' >
                            <Grid2 item className='' xs={6}>
                                <div className="flex  items-center">
                                    <img className='w-[5rem] h-[5rem] object-cover object-top ' src={item.product.imageUrl} alt="img not loaded" />
                                    <div className='ml-5 space-y-2'>
                                        <p>{item.product.title}</p>
                                        <div className='opacity-50 text-xs font-semibold space-x-5'>
                                            <span>Color: {item.product.color}</span>
                                            <span>Size: {item.size}</span>
                                        </div>
                                        <p>Seller : {item.product.brand}</p>
                                        <p>₹ {item.discountedPrice}</p>
                                    </div>
                                </div>
                            </Grid2>

                            <Grid2 className=' w-[20%]' item>
                                <div className='w-[2rem] h-[2rem]' >
                                    <HomeIcon/>
                                </div>
                                <div className='payadd' >
                                <p className=' font-bold mr-2' >{order.order?.shippingAddress[0].firstName}  </p>
                                <p className=' font-bold' >{order.order?.shippingAddress[0].lastName}</p>
                                </div>
                                <p className = 'font-bold'>{order.order?.shippingAddress[0].streetAddress}</p>
                                <div >
                                <span className = 'font-bold'>{order.order?.shippingAddress[0].city},</span>
                                <span className = 'font-bold'>{order.order?.shippingAddress[0].state} - </span>
                                <span className = 'font-bold'>{order.order?.shippingAddress[0].zipCode}</span>
                                </div>
                                <p className = ' font-bold'>
                                    {/* <PhoneIcon  /> */}
                                    +91-
                                    {order.order?.shippingAddress[0].mobile}</p>

                            </Grid2>
                        </div>

                    </Grid2>)}
                </Grid2>



            </div>

        </div>
    )
}

export default PaymentSuccess