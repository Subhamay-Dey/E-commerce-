import React, { useEffect, useState } from 'react'
import Navbara from './Navbara'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Ban from './Ban'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Hero() {
    const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  }
    const [products, setProducts] = useState([])

    const padmaja = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }

    useEffect(() => {
        padmaja();
    },[])

    const [jinish, setJinish] = useState([])

    const subho = () => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(json=>setJinish(json))
    }
    
    useEffect(() => {
        subho();
    },[])
    
    

  return (
    <>
    <Ban/>
    {/* md:mt-[100px] md:mx-[50px] md:ml-[100px]  */}
    <div className='w-screen h-full flex items-center justify-center '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
            {products.map((jinishpotro) => (
                <div className='block shadow-2xl py-3 pb-[30px] px-4 hover:scale-105 duration-300 cursor-pointer m-10'>
                <div className='w-[300px] md:w-[350px] h-[500px] md:h-[450px]  rounded-md flex justify-center items-center mt:[70px] md:mt-[2px]'>
                    <div className='block h-full w-full p-3 relative'>
                        <div className='flex justify-center items-center md:h-[300px] h-[250px] w-[100%]'>
                            <img src={jinishpotro.image} alt="" className='md:h-[250px]'/>
                        
                            {/* <div className='absolute top-2 left-10 text-2xl'><FaRegHeart/></div> */}
                            <div>
                                <span
                                    className={`cursor-pointer ${isLiked ? 'absolute top-2 left-10 text-2xl' : 'absolute top-2 left-10 text-2xl'}`}
                                    onClick={handleClick}
                                >
                                    {isLiked ? '❤️' : '🖤'}
                                </span>
                            </div>
                        </div>
                        <div className='md:flex block md:pt-[30px] mt-[60px] md:mt-0 space-x-6  justify-center'>
                            <div className='text-2xl font-bold '>${jinishpotro.price}</div>
                            <div className='text-lg mt-0 text-zinc-600 font-semibold md:leading-tight md:tracking-tight'>{jinishpotro.title}</div>
                        </div>
                    </div>
                </div>
                     <div className='flex justify-between mx-6'>
                            <div className='bg-red-300 text-red-800 md:text-xl text-lg px-4 py-2 rounded-xl cursor-pointer'>Buy now</div>
                            <div className='bg-emerald-300 text-emerald-800 md:text-xl text-lg px-4 py-2 rounded-xl cursor-pointer'>Add to cart</div>
                        </div>
                </div>
            ))}
        </div>
    </div>
    <div className='w-screen h-full text-4xl text-red-600 text-center justify-center pt-4 font-bold mt-20'>Best Seller
        <div className='grid grid-cols-1 md:grid-cols-4 mx-[50px] ml-[100px]'>
            {jinish.map((bostro) => (
                <>
                <div className='w-[200px] md:w-[250px] h-[450px] md:h-[400px] m-8 shadow-2xl hover:scale-110 duration-300  rounded-md flex mt:[70px] md:mt-[100px] justify-center items-center'>
                    <div className='block p-6'>
                        <img src={bostro.images} alt="" className='rounded-md md:h-2/5'/>
                        <div className='flex md:pt-[10px] p-4 '>
                            <div className='text-2xl text-black md:h-[10px] w-full'>${bostro.price}</div>
                            <div className='text-2xl text-teal-400 md:text-2xl leading-20'>{bostro.title} </div>
                            <a href=""></a>
                        </div>
                    </div>
                </div>
                
                </>
            ))}
        </div>
    </div>
    </>
  )
}

export default Hero