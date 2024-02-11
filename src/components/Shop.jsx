import React from 'react'
import { IoMdCart } from 'react-icons/io'
import { LiaStarSolid } from "react-icons/lia";

function Shop() {

    const viewMore = [
        {
            id:1, 
            
        },
        {
            id:2, 
            
        },
        {
            id:3, 
            
        },
        {
            id:4, 
            
        },
        
    ]
  return (
    <>
    
    <div className='h-screen w-full'>
        <div className='block'>
            <div className='h-15 w-full flex justify-between py-3 px-6'>
                <div className='text-gray-600 font-bold text-2xl'>Product Page</div>
                <div className='p-3 cursor-pointer hover:scale-110 duration-300'>
                    <div className='h-5 w-5 rounded-full bg bg-red-600 flex justify-center text-white items-center'>1</div>
                    <IoMdCart size={30}/>
                </div>
            </div>

            <div className='w-full h-screen grid md:flex grid-cols-1 md:flex-wrap justify-between px-6 py-4'>
                <div className='block h-3/4 w-[35%]'>
                    <div className='w-full rounded-2xl h-full md:h-[80%]'>
                        <img className='h-[200px] md:h-full w-[400px] md:w-full' src="lappy.jpg" alt=""/>
                    </div>
                    <div className='w-full h-[40%] gap-3 flex'>
                        {viewMore.map(({id}) => (
                            <div key={id} className='w-[16%] h-[40%] bg-slate-500 rounded-xl cursor-pointer hover:scale-110 duration-300'>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='block h-3/4 w-[65%]'>
                    <div className='text-black font-bold text-2xl'>MacBook Air M1</div>
                    <div className='flex gap-1 mt-2'>
                         <LiaStarSolid className='text-yellow-500'/>
                         <LiaStarSolid className='text-yellow-500'/>
                         <LiaStarSolid className='text-yellow-500'/>
                         <LiaStarSolid className='text-yellow-500'/>
                         <LiaStarSolid className='text-yellow-500'/>
                    </div>
                    <div className='text-semibold text-black text-xl py-3'>Details:</div>
                    <div className='text-slate-800 text-lg w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quis officiis, totam deleniti earum dolores adipisci neque magni suscipit eligendi quod qui omnis accusamus. Natus nam tenetur voluptatem eligendi ipsa.
                    Doloribus reprehenderit rem tenetur reiciendis earum ducimus quidem voluptates vero accusamus aspernatur, ea error aperiam fugit iure quibusdam, quis porro! Id atque perferendis quibusdam ratione aliquid soluta magni tempora accusantium!</div>
                    <div className='text-red-600 font-bold text-2xl py-6'>₹65,000</div>
                    {/* <div></div> */}
                    <div className='flex gap-10 md:w-[50%] md:h-[80px] mt-3'>
                            <div className='w-[50%] cursor-pointer flex justify-center items-center text-center hover:scale-110 duration-300 h-[80%] px-6 py-3 bg-green-700 text-white rounded-lg'>
                                Add to cart
                            </div>
                            <div className='w-[50%] cursor-pointer flex justify-center items-center text-center hover:scale-110 duration-300 h-[80%] px-6 py-3 bg-green-700 text-white rounded-lg'>
                                Buy now
                            </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop