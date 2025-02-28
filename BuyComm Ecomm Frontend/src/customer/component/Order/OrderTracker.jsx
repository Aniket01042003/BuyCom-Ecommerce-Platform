import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered",
]

const OrderTracker = ({ activeStep }) => {
    return (
        <div className='w-full py-20' >
            <Stepper activeStep={activeStep} alternativeLable >
                {
                    steps.map((lable) => <Step>
                        <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }} >{lable}</StepLabel>
                    </Step>)
                }
            </Stepper>
        </div>
    )
}

export default OrderTracker
