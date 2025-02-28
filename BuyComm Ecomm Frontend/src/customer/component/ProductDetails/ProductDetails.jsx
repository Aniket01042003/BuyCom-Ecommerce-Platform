
'use client'

import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Button, Grid2, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import mens_kurta from '../../../Data/Mens_Kurta';
import'./ProductDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductsById } from '../../../Redux/Product/Action'
import { store } from '../../../Redux/store'
import { addItemToCart } from '../../../Redux/Cart/Action'

const product = {
    name: 'UniversalOutfit',
    price: '$199',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState(" ");
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const {products}= useSelector(store=>store);

    console.log("params ", params);

    const handleAddToCart = ()=>{
        const data = {productId:params.productId,size:selectedSize.name}
        // console.log("PD data ", data);
        dispatch(addItemToCart(data))
        navigate("/cart")
    }

    useEffect(() => {
        const data = {productId:params.productId};
        dispatch(findProductsById(data));
    }, [params.productId])
    

    return (
        <div className="bg-white w-[98vw]">
            {/* Upper Section */}
            <div className="pt-4 pb-4 mb-[2rem] flex align-items-start w-[100%] ">
                <div className='flex flex-col  w-[50%] '>
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            {product.breadcrumbs.map((breadcrumb) => (
                                <li key={breadcrumb.id}>
                                    <div className="flex items-center">
                                        <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                            {breadcrumb.name}
                                        </a>
                                        <svg
                                            fill="currentColor"
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                            ))}
                            <li className="text-sm">
                                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    {products.product?.brand}
                                </a>
                            </li>
                        </ol>
                    </nav>
                    {/* Image gallery */}
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <img
                            alt={product.images[0].alt}
                            src={products.product?.imageUrl}
                            className="hidden  rounded-lg object-cover lg:block"
                        />


                    </div>
                </div>
                {/* Product info */}
                <div className='w-[50%] ' >
                    <div className="lg:colspan-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl">
                        <div className="lg:col-span-2 ">
                            <h1 className="text-lg font-semibold lg:text-xl text-gray-900">{products.product?.brand}</h1>
                            <h1 className="text-lg opacity-60 lg:text-xl text-gray-900">{products.product?.title}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className='flex space-x-5 justify-content-start items-center text-lg lg:text-xl text-gray-900 mt-6' >
                                <p className='font-semibold' >{products.product?.discountedPrice} </p>
                                <p className='opacity-50 line-through' >{products.product?.price} </p>
                                <p className='text-green-600 font-semibold'>{products.product?.discountPresent}% </p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6 flex">
                                <div className='flex items-center' >
                                    <Rating name="read-only" value={4.4} readOnly />
                                    <p className='ml-2 opacity-50 text-sm' >{products.product?.numRatings} Ratings</p>
                                    <p className='ml-2 opacity-50 text-sm' >80 Reviews</p>
                                </div>
                            </div>

                            <form className="mt-10">
                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                        >
                                            {product.sizes.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={classNames(
                                                        size.inStock
                                                            ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                        'group relative flex items-center justify-content-center rounded-md  shadow-md  px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
                                                    )}
                                                >
                                                    <span>{size.name}</span>
                                                    {size.inStock ? (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                                                        />
                                                    ) : (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                                                            >
                                                                <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                <Button onClick={handleAddToCart} color='secondary' variant="contained" sx={{px:"2rem",mt:"2rem", py:"1rem", bgcolor:"#9155fd"}} >Add To Cart</Button>
                            </form>                                                                     
                        </div>

                        <div className="py-10 mt-5 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{products.product?.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            {/* Rating Section */}
            <section className='ml-4 relative mt-[2rem] mb-[3rem]'>
                <h3 className='font-semibold text-xl h3 pd-4'>Ratings & Review</h3>
                <div className="shadow-sm w1 p-5">
                    <Grid2 container className='h-[17rem] w-[100%]' spacing={7} >
                        <Grid2 item xs={7} >
                            <div className="flex flex-row justify-content-space-between ">
                                <div className=' ml-[10px] p-[10px] mt-[0px]'>
                                    <ProductReviewCard />
                                </div>
                                <div className=' ml-[10px] p-[10px] mt-[0px]'>
                                    <ProductReviewCard />
                                </div>
                                <div className=' ml-[10px] p-[10px] mt-[0px]'>
                                    <ProductReviewCard />
                                </div>
                                <div className=' ml-[10px] p-[10px] mt-[0px]'>
                                    <ProductReviewCard />
                                </div>
                                <div className=' ml-[10px] p-[10px] mt-[0px]'>
                                    <ProductReviewCard />
                                </div>
                            </div>
                        </Grid2>
                    </Grid2>
                </div>
            </section>

            {/* releted item */}
            <section className='ml-4 pt-10px mt-[2rem]'>
                <h1 className='font-semibold text-xl h3 pd-4' >Similar products</h1>
                <div className="flex flex-wrap space-y-5">
                    {mens_kurta.map((item, index) => <HomeSectionCard key={index} product={item} />)}
                </div>
            </section>
        </div>
    )
}
