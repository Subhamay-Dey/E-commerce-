import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";

import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}

    >
      <div className="px-8 py-4 bg-[#fd3d57] flex justify-center items-center cursor-pointer relative" id='s'>
                 <span className="text-white ">
                    <i className=""><FiMenu/></i>
                 </span>
                 <span className="capitalize ml-2 text-white">All categories</span>
            </div>
      {isHovered && (
        <div
          className="absolute top-full left-0 mt-2 bg-white border border-blue-500 rounded shadow-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ul className=" p-2 w-80">
          <li className="cursor-pointer hover:bg-blue-500 hover:text-white p-2"><Link to="/BestSeller">Best Seller</Link></li>
            <li className="cursor-pointer hover:bg-blue-500 hover:text-white p-2">Men's Collection</li>
            <li className="cursor-pointer hover:bg-blue-500 hover:text-white p-2">Women's Collection</li>
            <li className="cursor-pointer hover:bg-blue-500 hover:text-white p-2">Child Projects</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
