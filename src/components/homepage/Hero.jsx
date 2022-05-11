/* eslint-disable no-unused-vars */
import React,{ Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Hero = () => {
  return (
    <div className="bg-gray-200 pt-40 sm:pt-28">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
            <div className="flex flex-col items-center w-full lg:flex-row sm:py-10 lg:w-1/2">
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold tracking-wide text-[#215aa8] lg:text-4xl">
                        CRACK-THE-CASE: <br />
                    </h1>
                    <h2 className='text-2xl font-bold mt-1 mb-5 text-blue-600'> Hands-On Business Workshop &amp; Paragon Case Challenge </h2>
                    <p className="mt-7 font-semibold text-gray-600">
                        PT Paragon Technology and Innovation through Indonesia Peerleaders presents...
                        <br /><br />
                        💼 CRACK-THE-CASE: <br />
                        Hands-On Business Workshop & Paragon Case Challenge 📚
                        <br /><br />
                        Crack-the-Case is an all-in-one event consisting of a hands-on workshop and Paragon business case challenge. The two events are conducted consecutively but are independently held. 
                        <br /><br />
                        The goal is to improve youth’s business logical thinking and achieve Indonesia Peerleaders’ goal of bridging the learning gap between Indonesian youth...
                    </p>
                    <div className="mt-12">
                        <a href="https://peerleaders.id/event" target="_blank"
                            className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400" rel="noreferrer">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-20 flex items-center justify-center w-full mt-2 lg:h-full lg:w-1/2">
                <img className="object-contain w-full max-w-4xl rounded-lg lg:h-full"
                    src="https://i.postimg.cc/6p0RQm42/IPL-crack-the-case.jpg" alt="event poster" />
            </div>
        </div>
    </div>
  )
}

export default Hero