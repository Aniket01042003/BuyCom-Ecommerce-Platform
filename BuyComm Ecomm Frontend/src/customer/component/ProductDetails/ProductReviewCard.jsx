import { Avatar, Box, Grid2, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    <div>
      <Grid2 conatiner spacing={2} gap={3} >
        <Grid2 item xs={1} >
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#901faf"}} >R</Avatar>
            </Box>
        </Grid2>
        <Grid2 item xs={9} >
            <div className='space-y-2' >
                <div>
                    <p>Raam</p>
                    <p>April 5,2023</p>
                </div>
            </div>
            <Rating value={4.5} name='half-rating' />
            <p>Nice Product I Love this Product</p>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default ProductReviewCard
