'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../../../public/evo-store-logo.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto z-10 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="/" className="mr-4">
            <div>
              <Image
                width={250}
                height={175}
                src={logo}
                alt="Logo"
              />
            </div>
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <MdOutlineMenu className="text-white text-3xl" />
          </button>
        </div>

        {/* Middle: Search and Links */}
        <div className={`md:flex flex-col md:flex-row items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          {/* Search Bar */}
          <div className="mb-2 md:mb-0">
            <input type="search" placeholder="Search..." className="rounded-lg px-4 py-2" />
          </div>

          {/* Links with Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 rounded-md hover:bg-gray-700">Brands</button>
          </div>
          <div className="relative group">
            <button className="px-4 py-2 rounded-md hover:bg-gray-700">Products</button>
          </div>
          <div className="relative group">
            <button className="px-4 py-2 rounded-md hover:bg-gray-700">Deals</button>
          </div>
        </div>

        {/* Right: Cart and User */}
        <div className={`md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="hover:text-gray-400"><FaShoppingCart/></a>
          <a href="#" className="hover:text-gray-400"><FaUser/></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
