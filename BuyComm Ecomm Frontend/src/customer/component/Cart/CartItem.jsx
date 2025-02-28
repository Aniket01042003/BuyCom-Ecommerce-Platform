import React from 'react'
import './CartItem.css'
import { IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useDispatch } from 'react-redux';
import { removeItemCart, updateItemToCart } from '../../../Redux/Cart/Action';
function CartItem({item}) {
    const dispatch = useDispatch();

    const handleUpdateCartItem = (num)=>{
        const data = {data:{quantity:item.quantity+num},cartItemId:item?._id}
        // console.log("data is ",data)
        dispatch(updateItemToCart(data))
    }
    const handleRemoveCartItem=()=>{
        dispatch(removeItemCart(item._id))
    }

    const count = 0;
    return (
        <div className='p-5 shadow-lg cartitem rounded-md' >
            <div className='cartbox'>
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
                    <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt="img not loaded" />

                </div>
                <div className='ml-5 lis text-justify'>
                    <div className='font-semibold ' >{item.product.title}</div>
                    <div className='j text-justify'>
                        <div className='opacity-70  ' >Size: {item.size},  {item.product.color}</div>
                        <div className='opacity-70 mt-2' >Seller: {item.product.brand}</div>
                    </div>
                    <div className=' top-[1rem] left-[-4rem] ' >
                        <h6 className='text-2xl font-semibold'>₹ {item.product.discountedPrice}</h6>
                        <div className='flex' >
                            <p className="flex line-through m-[10px] tracking-tight text-gray-500">₹ {item.product.price}</p>
                            <p className='flex text-green-600 font-semibold'> {item.product.discountPresent}% off</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-5'>
                    <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1} sx={{color:"rgb(145 85 253 / var(--tw-bg-opacity, 1))"}} >
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='w-[2rem] flex justify-content-center border' >
                        {item.quantity}
                    </span>
                    <IconButton onClick={()=>handleUpdateCartItem(1)} sx={{color:"rgb(145 85 253 / var(--tw-bg-opacity, 1))"}} >
                        <ControlPointIcon />
                    </IconButton>
                </div>
                <div>
                    <button onClick={handleRemoveCartItem} className='text-red-800'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
