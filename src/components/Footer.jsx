/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="p-4 bg-white rounded-t-lg shadow md:px-6 md:py-8 dark:bg-[#15365e]">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to='/' className="flex items-center mb-4 sm:mb-0">
                    <img src="https://i.postimg.cc/hj6VHbD5/IPL-LOGO-15.png" className="mr-3 h-20" alt="IPL-Logo White" />
                </Link>
                <h1 className="font-bold text-white text-xl sm:text-3xl my-5 sm:my-0"> Keep in Touch with Us </h1>
                <ul className="flex flex-wrap font-semibold items-center mb-6 mr-3 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://github.com/Delos-343" target="_blank" class="hover:underline" rel="noreferrer">Delos-343</a>. All Rights Reserved.
            </span>
        </footer>
    </div>
  )
}

export default Footer