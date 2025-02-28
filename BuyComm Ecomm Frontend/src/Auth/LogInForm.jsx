import { Button, TextField } from '@mui/material'
import { Grid } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser, login } from '../Redux/Auth/Action'



const LogInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt=localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store);


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get("email"),
            password: (data.get("password"))
        }
        dispatch(login(userData));
        console.log("userData", userData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
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
                            id='passwaord'
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
                            LogIn
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex itmes-center'>
                    <p>If you have already account ?</p>
                    <button onClick={() => {
                        navigate("/register")
                    }} className='ml-2 text-[#9155FD]' size='small'>
                        register
                    </button>
                </div>
            </div>
        </div>
    )
}


export default LogInForm
