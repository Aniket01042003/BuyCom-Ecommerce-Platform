import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, fontSize, Grid, width } from '@mui/system'
import { StarIcon } from '@heroicons/react/24/outline'

function OrderDetails() {
    return (
        <div className='px:4  shadow-lg lg:p-10'>
            <div className='text-justify mb-10'>
                <h1 className='h1 font-bold text-lg' >Delivery Address</h1>
                <AddressCard data={{}} />
            </div>
            <div className='py-20 h-[5rem] flex align-center '>
                <OrderTracker />
            </div>
            {[1, 1, 1, 1, 1].map((item) => <Grid className='space-x-5 ' container>
                <Grid item container className='shadow-xl rounded-md p-4 border'
                    sx={{ width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className='flex'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://printmytee.in/wp-content/uploads/2021/07/180-GSM-Polyester-T-shirt-05.jpg" alt="" />
                            <div className='flex align-items-start flex-col ml-5'>
                                <p className='h4' >Men Slim Mid Rise Black Jeans</p>
                                <div className='flex opacity-70'>
                                    <p>Color: black</p>
                                    <p className='ml-2' >Size: M</p>
                                </div>
                                <p className='h4'>Seller: lineria</p>
                                <p className='h4'>₹1099</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item >
                        <Box sx={{color:"#9C27B0",display:"flex"}}>
                            <StarIcon  className='px-2 w-[2rem]'/>
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>)}
        </div>
    )
}

export default OrderDetails
