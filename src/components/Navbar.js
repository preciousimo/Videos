import React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { GrAppsRounded } from 'react-icons/gr';
import { IoIosSettings } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import logo from "../assets/logo.png"


export default function Navbar() {
    return (
        <div className='flex items-center justify-between px-5 py-3'>
            {/* Left Side */}
            <div className='flex items-center shrink-0'>
                <FiMenu className='w-6 h-6'/>
                <div className='pl-4'>
                    <img src={logo} alt="logo" className='w-32'/>
                </div>
            </div>

            {/* Middle */}
            <div className='hidden sm:flex w-full'>
                <input type="search" placeholder="Search..." className="outline-0 bg-[#dae0e6] rounded-full pl-4 py-2 w-full mx-10"/>
            </div>
            
            {/* Right Side */}
            <div className='flex h-full items-center gap-3'>
                <FiSearch className='h-6 w-6'/>
                <GrAppsRounded className='h-6 w-6'/>
                <IoIosSettings className='h-6 w-6'/>
                <div className='flex items-center bg-[#a359a0] p-1 rounded-full text-white'>
                    <FaUser className='h-5 w-5 ml-1.5 mr-1'/>
                    <p className='font-bold mr-1.5 whitespace-nowrap'>Log in</p>
                </div>
            </div>
        </div>
    )
}