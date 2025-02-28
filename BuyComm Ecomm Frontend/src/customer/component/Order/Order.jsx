import { Grid } from '@mui/system'
import React from 'react'
import OrderCard from './OrderCard'

const orderStatus = [
    { lable: "On The Way", value: "on_the_way" },
    { lable: "Delivered", value: "delivered" },
    { lable: "Cancelled", value: "cancelled" },
    { lable: "Return", value: "return" },
]

function Order() {

    return (
        <div>
            <Grid container   >
                <Grid className='ml-[1rem]' item xs={2.5} >
                    <div className="h-auto w-[21rem] text-justify shadow-lg bg-white p-4 sticky top-5">
                        <div><h1 className='font-bold text-lg' >Filter</h1></div>
                        <div className=' text-justify space-y-4 mt-10' >
                            <h1 className="font-semibold">ORDER STATUS</h1>
                            {orderStatus.map((option) => <div className='text-justify' >
                                <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigon-500' />
                                <label className='ml-3 text-sm te' htmlFor={option.value}>
                                    {option.lable}</label>
                            </div>)}
                        </div>
                    </div>
                </Grid>
                <Grid className="ml-5 w-[50rem] h-[fit-content] justify-space-evenly" item xs={9}>
                    
                    <div className='space-y-5'>
                    {[1,1,1,1,1,1].map((item)=><OrderCard/>)}
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default Order
