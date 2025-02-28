import { Grid } from '@mui/system'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

function OrderCard() {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='shadow-md hover:shadow-2xl'>
            <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>
                <Grid item xs={6}>
                    <div className='flex  cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top ' src="https://printmytee.in/wp-content/uploads/2021/07/Product-Your-Design-Here-04.jpg" alt="img not loaded" />
                        <div className='ml-5 text-justify space-y-2'>
                            <div className=''>Men Slim Mid Rise Black Jeans</div>
                            <div className='opacity-50 text-xs font-semibold'>Size: M</div>
                            <div className='opacity-50 text-xs font-semibold'>Color: Black</div>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={2} >
                    <p>₹1099</p>
                </Grid>
                <Grid item xs={4} >
                    <p>
                        <span>
                            <AdjustIcon sx={{width:'20px',height:'20px'}} className='text-green-600 mr-2'/>
                            Delivered On March 03
                        </span>
                    </p>
                    <p className='text-xs' >
                        Your Item Has Been Delivered
                    </p>
                    {false && <p>
                        <span>
                            Expected Delivered On March 03
                        </span>
                    </p>}

                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard
