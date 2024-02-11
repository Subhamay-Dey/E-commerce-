import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import{ useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { IoSearchOutline } from "react-icons/io5";
import Dropdown from './Dropdown';

const Navbara = () => {

    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const navigate = useNavigate();

    const links = [
        {
            index: 1,
            name: 'Home',
            route: "/",
        },
        {
            index: 2,
            name: 'Shop',
            route: "/shop",
        },
        {
            index: 3,
            name: 'Profile',
            route: "/profile",
        },
        {
            index: 4,
            name: 'Contact us',
            route: "/contact",
        },
        {
            index: 5,
            name: 'Ur Cart',
            route: "/cart",
        },
    ]

  return (
    <>
    <header className="py-4 shadow-sm bg-white flex justify-center">
        <div className="container w-[1200px] flex items-center justify-between">
            
             <a href="#">
               <div className="flex transition-transform transform hover:scale-110">
                <div className="text-[#fd3d57] w-30 text-3xl font-bold">SUBHO's</div>
                <div className="text-black w-24 text-3xl font-medium">CART</div>
            </div>
             </a>
             <div className="w-full max-w-xl relative flex">
                <span className="absolute left-4 top-3.5 text-xl text-gray-400 ">
                    <IoSearchOutline />
                </span>
                <div className='md:w-[576px] md:h-[50px] flex'>

                <input  type="text" className="w-full border border-[#fd3d57] border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="search" />
                <button className="bg-[#fd3d57] border border-[#fd3d57] text-white px-8 rounded-r-md hover:bg-transparent hover:text-[#fd3d57] transition">Search</button>
                </div>
             </div>

            <div className="flex items-center space-x-2 relative">
                <a href="#" className="text-center text-gray-700 hover:text-[#fd3d57] transition relative">
                <div className="text-2xl">
                    <i className=""><FaRegHeart/></i>
                </div>
                <div className="text-xs leading-3">Wish list</div>
                <span className="absolute right-0 -top-1 left-4 w-5 h-5 rounded-full flex items-center justify-center bg-[#fd3d57] text-white text-xs">6</span></a>
            </div>
            <div className="flex items-center space-x-2">
                <a href="#" className="text-center text-gray-700 hover:text-[#fd3d57] transition relative">
                <div className="text-2xl">
                    <i className=""><FaShoppingCart/></i>
                </div>
                <div className="text-xs leading-3">Cart</div>
                <span className="absolute right-0 -top-1 left-4 w-5 h-5 rounded-full flex items-center justify-center bg-[#fd3d57] text-white text-xs">4</span></a>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-center text-gray-700 hover:text-[#fd3d57] transition relative">
                <div className="text-2xl relative">
                    <i className=""><FaRegUser/></i>
                </div>
                <div className="text-xs leading-3 absolute -left-1.5">Account</div>
               </a>
            </div>
        </div>
    </header>
   
    <nav className="bg-gray-800">
        <div className="container flex justify-center items-center">
            <Dropdown/>
            {/* <div className="px-8 py-4 bg-[#fd3d57] flex justify-center items-center cursor-pointer relative" id='s'>
                 <span className="text-white ">
                    <i className=""><FiMenu/></i>
                 </span>
                 <span className="capitalize ml-2 text-white">All categories</span>
            </div> */}
            
            {
                    links.map(({index, name, logo, route}) => (
                        <>
                        <div key={index} className='flex' onClick={() => navigate(route)}>
                            <div className="px-8 py-4 bg-gray-800 flex items-center cursor-pointer hover:bg-red-400">
                            <span className="capitalize text-white">{name}</span>
                            <span className='text-white text-2xl pl-2'>{logo}</span>
                            </div>
                        </div>
                        </>   
                    ))
                }
    {isAuthenticated? (<button className='bg-red-400 p-2 ml-12 h-3/5 w-[100px] rounded-xl text-white' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>):(<button className='bg-green-400 p-2 ml-12 h-3/5 w-[100px] rounded-xl text-white' onClick={() => loginWithRedirect()}>Log In</button>)}
        </div>
    </nav>
    </>
  )
}
export default Navbara