import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product})=>{
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={()=>{navigate(`/product/${product._id}`)}} className="card">
        <img src={product.imageUrl}
          className="card-img-top cardimg object-cover object-left-top" alt="img not loaded" />
        <div className="card-body bg-white">
          <p className="card-text">{product.brand}</p>
          <h3 className="card-title">{product.title}</h3>
          <div className='flex item-center space-x-2'>
            <p className='font-semibold '>₹{product.discountedPrice}</p>
            <p className='line-through opacity-50'>₹{product.price}</p>
            <p className='text-green-600 font-semibold'>{product.discountPresent}% off</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
