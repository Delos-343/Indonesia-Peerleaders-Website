import React,{ Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Hero = () => {
  return (
    <div className="bg-gray-200 pt-40 sm:pt-28">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
            <div className="flex flex-col items-center w-full lg:flex-row sm:py-10 lg:w-1/2">
                <div className="max-w-lg">
                    <h1 className="text-xl font-bold tracking-wide text-[#15365e] lg:text-3xl lg:text-4xl">
                        PARAGON DAY <br />
                    </h1>
                    <h2 className='text-2xl font-bold mt-1 mb-5 text-white text-[#15365e]'> Find Your Field, Discover Your Calling! </h2>
                    <p className="mt-7 font-semibold text-gray-600">
                        [KAMU BERKESEMPATAN DIREKRUT PT PARAGON?!] <br />
                        Indonesia Peerleaders by PT Paragon Technology and Innovation mempersembahkan...
                        <br /><br />
                        ✨ PARAGON DAY ✨ <br />
                        Find Your Field, Discover Your Calling!
                        <br /><br />
                        Ini KESEMPATANMU untuk mengenal lebih jauh PT Paragon Technology and Innovation sebagai salah satu perusahaan FMCG di Indonesia!
                        <br /><br />
                        Ketahui lebih dalam mengenai departemen pilihanmu: Marketing, Sales, IT, Product, Supply Chain Management...
                    </p>
                    <div className="mt-14">
                        <a href="https://peerleaders.id/event" target="_blank"
                            className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400">
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-20 flex items-center justify-center w-full mt-2 lg:h-full lg:w-1/2">
                <img className="object-contain w-full max-w-4xl rounded-lg lg:h-full"
                    src="https://i.postimg.cc/J7PCJQwh/paragon-Day-speakers.png" alt="event poster" />
            </div>
        </div>
    </div>
  )
}

export default Hero