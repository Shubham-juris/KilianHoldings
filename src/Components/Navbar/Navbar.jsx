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
        <div className='flex relative justify-around items-center w-full h-[150px]'>
          <div className='container w-full h-[50px] flex items-center'>
            <button className='rounded-lg w-7 ' onClick={() => setIsOpen(true)}>
              <img src={img} alt='menu' />
            </button>
          </div>
          <img
            className='absolute left-1/2 transform -translate-x-1/2 w-[110px]'
            src={img2}
            alt='logo'
          />
          <div className='flex gap-x-4 text-[#0C3F40]'>
            <FaSearch className='size-7' />
            <MdOutlineShoppingCart className='size-7' />
            <CgProfile className='size-7' />
          </div>
        </div>
        {/* Sidebar Drawer */}
        <div
          className={`fixed top-0 left-0 z-40 w-[22em] h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Header */}

          {/* Navigation Links */}
          <ul className='font-medium text-[#0C3F40]' style={{ padding: '5em' }}>
            <li style={{ marginBottom: '1.2em' }}>
              <Link
                to='/'
                onClick={() => setIsOpen(false)}
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>HOME</span>
              </Link>
              <div className='float-right relative bottom-6 '>
                <button
                  className='hover:bg-gray-200 dark:hover:bg-gray-600 '
                  onClick={() => setIsOpen(false)}
                >
                  ✖
                </button>
              </div>
            </li>
            <li style={{ marginBottom: '1.2em' }}>
              <Link
                to='/aboutus'
                onClick={() => setIsOpen(false)}
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>ABOUT US</span>
              </Link>
            </li>
            <li style={{ marginBottom: '1.2em' }}>
              <a
                href='/services'
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>SERVICES</span>
              </a>
            </li>
            <li style={{ marginBottom: '1.2em' }}>
              <Link
                to='accountbook'
                onClick={() => setIsOpen(false)}
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>ACCOUNTING & BOOKKEEPING</span>
              </Link>
            </li>
            <li style={{ marginBottom: '1.2em' }}>
              <Link
                to='/stockmarket'
                onClick={() => setIsOpen(false)}
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>STOCK MARKET</span>
              </Link>
            </li>
            <li style={{ marginBottom: '1.2em' }}>
              <a
                href=''
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>BOOK A CONSULTATION</span>
              </a>
            </li>
            <li style={{ marginBottom: '1.2em' }}>
              <a
                href='/clintportal'
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>CLINT PORTAL</span>
              </a>
            </li>
            <li style={{ marginBottom: '1.2em' }}>
              <Link
                to='#'
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>CEREERS</span>
              </Link>
            </li>
            <li style={{ marginBottom: '1.2em' }}>
              <Link
                to='/contactus'
                onClick={() => setIsOpen(false)}
                className='flex items-center p-2 text-[#0C3F40] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span className='ml-3'>CONTACT US</span>
              </Link>
            </li>
            <li style={{ marginBottom: '1.2em' }}>
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
