import React, { useState } from 'react'
import './ProductPage.css'
import { Grid2 } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import mens_kurta from '../../../Data/Mens_Kurta';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const ProductPage = () => {


    const [images, setImages] = useState({
        img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);
    const [selectedColor, setSelectedColor] = useState("Black"); // Default color
    const [selectedSize, setSelectedSize] = useState("M"); // Default size

    const colors = ["Black", "White", "Red", "Blue"];
    const colorStyles = {
        Black: "bg-black text-white",
        White: "bg-white text-black border border-gray-400",
        Red: "bg-red-600 text-white",
        Blue: "bg-blue-600 text-white"
    };
    const sizes = ["S", "M", "L", "XL"];

    const existingRating = 4;

    return (
        <div className='flex flex-col'>
            <div className='flex mt-10 flex-col justify-between lg:flex-row gap-16 lg:items-center'>
                <div className='flex flex-col gap-6 lg:w-2/4'>
                    <img src={activeImg} alt="" className='w-[30rem] h-[22rem] aspect-square object-cover rounded-xl' />
                    <div className='flex flex-row justify-between h-24'>
                        <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)} />
                        <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)} />
                        <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)} />
                        <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)} />
                    </div>
                </div>
                {/* ABOUT */}
                <div className='flex flex-col gap-4 lg:w-2/4'>
                    {/* Name Price  Rating */}
                    <div className='flex flex-col relative left-[-15rem]'>
                        <div className='flex relative left-[-3.7rem] text-violet-600 font-semibold'>Special Sneaker</div>
                        <h1 className='flex text-3xl font-bold'>Nike Invincible 3</h1>
                        <div className='relative top-[1rem] left-[-4rem] ' >
                            <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                            <div className='flex' ><p className="flex line-through m-[10px] tracking-tight text-gray-500">$399</p>
                            <p className='flex text-green-600 font-semibold'> 20% off</p></div>
                        </div>
                        <div className=''>
                            <div className='flex relative left-[6rem]  gap-2 mt-6'>
                                <div className='flex relative left-[-1rem] gap-2'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className={`w-8 h-8 ${star <= existingRating ? 'text-yellow-500' : 'text-gray-300'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 .587l3.668 7.432 8.332 1.151-6.065 5.816 1.482 8.207L12 18.896 4.583 23.193l1.482-8.207L0 9.17l8.332-1.151L12 .587z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className='opacity-50 text-sm'>5625 Ratings</p>
                                <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>3870 Reviews</p>
                            </div>
                        </div>

                    </div>
                    {/* Description */}
                    <p className='flex text-justify mr-[20px] text-gray-700'>
                        Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                    </p>


                    {/* Color and Size Section */}
                    <div className='flex flex-col  gap-4'>
                        <div className='flex colsize flex-col'>
                            <label className='flex  relative left-[-8.5rem] text-lg font-semibold'>Select Color:</label>
                            <div className='flex gap-4 mt-2'>
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        className={`py-2 btn circle  px-4 but ${colorStyles[color]} ${selectedColor === color ? 'ring-2 ring-violet-500' : ''}`}
                                        onClick={() => setSelectedColor(color)}
                                    >
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='flex colsize2 flex-col'>
                            <label className='flex relative left-[-6.5rem] text-lg font-semibold'>Select Size:</label>
                            <div className='flex gap-4 mt-2'>
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`py-2 px-4 rounded-md ${selectedSize === size ? 'bg-violet-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-12'>
                            <button className='bg-gray-200 py-2 px-6 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev > 1 ? prev - 1 : prev = 0)}>-</button>
                            <div className='flex  flex-row  items-center'>

                                <span className='py-4  rounded-lg'>{amount}</span>
                            </div>
                            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                        </div>
                        <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                    </div>
                </div>
                {/* Rating Section */}
            </div>
            <div className='separation'>
                Sepration
            </div>
            <section className='mt-[10px] mb-[10px]'>
                <h1 className='font-semibold text-4xl pd-4'>Ratings & Review</h1>
                <div className="border w1 p-5">
                    <Grid2 container className='h-[17rem]' spacing={7} >
                        <Grid2 item xs={7} >
                            <div className="flex flex-row justify-center ">
                                <div className='border ml-[10px] p-[10px] mt-[0px]'>
                                    <ProductReviewCard />
                                </div>
                                <div className='border ml-[10px] p-[10px] mt-[0px]'>
                                    <ProductReviewCard />
                                </div>
                                <div className='border ml-[10px] p-[10px] mt-[0px]'>
                                    <ProductReviewCard />
                                </div>
                                <div className='border ml-[10px] p-[10px] mt-[0px]'>
                                    <ProductReviewCard />
                                </div>
                                <div className='border ml-[10px] p-[10px] mt-[0px]'>
                                    <ProductReviewCard />
                                </div>
                            </div>
                        </Grid2>
                    </Grid2>
                </div>
            </section>
            <div className='separation'>
                Sepration
            </div>
            {/* releted item */}
            <section className='pt-10px'>
                <h1 className='font-semibold text-4xl pd-4' >Similar products</h1>
                <div className="flex flex-wrap space-y-5">
                    {mens_kurta.map((item, index) => <HomeSectionCard key={index} product={item} />)}
                </div>
            </section>
        </div>
    )
}

export default ProductPage
