import { useState } from 'react';
import img from '../../assets/Navbar/menu.png';
import img2 from '../../assets/Navbar/NavbarImage.webp';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className='flex relative justify-between items-center w-full h-[150px] px-4 sm:px-6 md:px-8 lg:px-12'>
          <div className='flex items-center relative left-3'>
            <button
              className='rounded-lg w-7 sm:w-8 md:w-9'
              onClick={() => setIsOpen(true)}
            >
              <img src={img} alt='menu' />
            </button>
          </div>
          <img
            className='absolute left-1/2 transform -translate-x-1/2 w-[80px] sm:w-[100px] md:w-[110px]'
            src={img2}
            alt='logo'
          />
          <div className='flex gap-x-4 text-[#0C3F40] relative right-3'>
            <FaSearch className='text-lg sm:text-xl md:text-2xl' />
            <MdOutlineShoppingCart className='text-lg sm:text-xl md:text-2xl' />
            <CgProfile className='text-lg sm:text-xl md:text-2xl' />
          </div>
        </div>
        {/* Sidebar Drawer */}
        <div
          className={`fixed top-0 left-0 z-40 w-[18em] sm:w-[20em] md:w-[22em] h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
         
          <ul className='font-medium text-[#0C3F40] px-4 sm:px-6 md:px-8 relative top-4 left-14'>
            <li style={{marginBottom: "25px" , marginTop:"20px"}}>
              <Link
                to='/' 
                onClick={() => setIsOpen(false)}
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>HOME</span>
              </Link>
              <div className='absolute top-0 left-60'>
                <button
                  className='hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-full'
                  onClick={() => setIsOpen(false)}
                >
                  ✖
                </button>
              </div>
            </li>
            <li style={{marginBottom: "25px"}}>
              <Link
                to='/aboutus'
                onClick={() => setIsOpen(false)}
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>ABOUT US</span>
              </Link>
            </li>
            <li style={{marginBottom: "25px"}}>
              <a
                href='/services'
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>SERVICES</span>
              </a>
            </li>
            <li style={{marginBottom: "25px"}}>
              <Link
                to='accountbook'
                onClick={() => setIsOpen(false)}
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>ACCOUNTING & BOOKKEEPING</span>
              </Link>
            </li>
            <li style={{marginBottom: "25px"}}>
              <Link
                to='/stockmarket'
                onClick={() => setIsOpen(false)}
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>STOCK MARKET</span>
              </Link>
            </li>
            <li style={{marginBottom: "25px"}}>
              <a
                href=''
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>BOOK A CONSULTATION</span>
              </a>
            </li>
            <li style={{marginBottom: "25px"}}>
              <a
                href='/clintportal'
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>CLINT PORTAL</span>
              </a>
            </li>
            <li style={{marginBottom: "25px"}}>
              <Link
                to='/careers'
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>CAREERS</span>
              </Link>
            </li>
            <li style={{marginBottom: "25px"}}>
              <Link
                to='/contactus'
                onClick={() => setIsOpen(false)}
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>CONTACT US</span>
              </Link>
            </li>
            <li style={{marginBottom: "25px"}}>
              <a
                href='/Blogs'
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>BLOGS</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
