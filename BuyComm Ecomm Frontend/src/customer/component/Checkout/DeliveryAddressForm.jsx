import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../Redux/order/Action';
import { useNavigate } from 'react-router-dom';

function DeliveryAddressForm({ handleNext }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({})

    const handleSubmit = () => {
        const orderData = { data, navigate };
        console.log('Form Data:', orderData);
        dispatch(createOrder(orderData, navigate))
        console.log(data);
    };
    const handleformSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber")
        }
        setData(address);
        // const orderData = { address, navigate };
        // console.log('Form Data:', orderData);
        // dispatch(createOrder(orderData))
        console.log(data);
    };
    const handleClick = async()=>{
        await handleSubmit(); 
        handleNext();
    }


    return (
        <div className=" flex">
            {/* Left Section */}
            <div className=" h-[30rem] w-[50%] overflow-y-scroll">
                <div className=" ml-2 flex flex-col align-items-start">
                    <AddressCard data={data} />
                </div>
                <Button
                    sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}
                    size='large'
                    variant='contained'
                    onClick={handleClick}
                >
                    Press next
                </Button>
            </div>

            {/* Right Section */}
            <div className=" w-[50%]">
                <Box className="rounded-s-md shadow-md p-4">
                    <form onSubmit={handleformSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address"
                                    name="address"
                                    label="Address"
                                    fullWidth
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="state"
                                    name="state"
                                    label="State/Province/Region"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}
                                    size="large"
                                    variant="contained"
                                    type="submit"
                                >
                                    Deliver Here
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </div>
        </div>
    );
}

export default DeliveryAddressForm;
