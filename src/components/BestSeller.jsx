import React, {useState, useEffect} from 'react';


const BestSeller = () => {

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
  )
}

export default BestSeller