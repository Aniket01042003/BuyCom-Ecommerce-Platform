import { Button, TextField } from '@mui/material'
import { Grid } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser, register } from '../Redux/Auth/Action'



const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store);

    useEffect(() => {
        if(jwt){
            dispatch(getUser(jwt))
        }
    }, [jwt,auth.jwt])
  
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: (data.get("password"))
        }
        dispatch(register(userData));
        console.log("userData", userData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='firstName'
                            name='firstName'
                            label='First Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid className=' w-[99%]' item xs={12}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid className=' w-[99%]' item xs={12}>
                        <TextField
                            required
                            id='password'
                            name='password'
                            label='Password'
                            fullWidth
                            autoComplete='password'
                        />
                    </Grid>
                    <Grid className='w-[99%]' item xs={12}>
                        <Button
                            className='bg-[#9155FD] w-[100%]'
                            type='submit'
                            variant='contained'
                            size='large'
                            sx={{ padding: ".8rem 0" }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex itmes-center'>
                    <p>If you have already account ?</p>
                    <button onClick={() => {
                        navigate("/login")
                    }} className='ml-2 text-[#9155FD]' size='small'>
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
