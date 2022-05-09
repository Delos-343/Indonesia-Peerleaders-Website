import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import DropOne from './dropdowns/DropOne'
import DropTwo from './dropdowns/DropTwo'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)
    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[100px] z-30 bg-[#215aa8] backdrop-blur-md shadow-md text-white font-semibold fixed drop-shadow-lg list-none'>
      <div className='p-5 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <Link to='home' className='mr-5 py-5'>
            <img className='w-40' src='https://i.postimg.cc/76fgsQkz/IPL-LOGO-14.png' alt='IPL LOGO' />
          </Link>
          <ul className='hidden md:flex space-x-5'>
            <li>
              <Link to={{ pathname: "https://instagram.com" }} target="_blank" smooth={true} duration={500}>
                <BsInstagram className='text-2xl' />
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "https://linkedin.com" }} target="_blank" smooth={true} offset={-50} duration={500}>
                <BsLinkedin className='text-2xl' />
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex space-x-5 py-5 px-7'>
          <li><Link to="about" smooth={true} offset={-200} duration={500}> About </Link></li>
          <button>
            <DropOne />
          </button>
          <button>
            <DropTwo />
          </button>
          <li><Link to="contact" smooth={true} offset={-50} duration={500}> Contact </Link></li>
        </div>
        <div className='md:hidden mr-4 text-white' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute items-center h-screen bg-[#215aa8] text-purple font-semibold w-full p-7'}>
          <li className='py-2 w-full text-center my-5'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}> About </Link></li>
          <button className='py-2 w-full my-5'> <DropOne /> </button>
          <button className='py-2 w-full my-5'> <DropTwo /> </button>
          <li className='py-2 w-full text-center my-5'><Link onClick={handleClose} to="contact" smooth={true} offset={-50} duration={500}> Contact </Link></li>

        <div className='flex justify-center m-10 items-center text-purple font-semibold'>
            <li className='text-center py-3 mx-5'>
              <Link to={{ pathname: "https://instagram.com" }} target="_blank" smooth={true} duration={500}>
                <BsInstagram className='text-2xl' />
              </Link>
            </li>
            <li className='text-center py-3 mx-5'>
              <Link to={{ pathname: "https://linkedin.com" }} target="_blank" smooth={true} offset={-50} duration={500}>
                <BsLinkedin className='text-2xl' />
              </Link>
            </li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
