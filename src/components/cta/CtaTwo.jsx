import React from 'react'

const CtaTwo = () => {
  return (
    <div className="bg-white dark:bg-[#215aa8] overflow-hidden relative mt-5 mb-28 lg:flex lg:items-center">
        <div className="w-full py-10 px-5 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
                <span className="block">
                Expand your horizons, develop your potential, and create impacts!
                </span>
            </h2>
            <p className="text-md mt-7 text-gray-300">
                With IPL, the next future leader is you.
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow">
                    <button type="button" className="py-2 px-4  bg-white hover:bg-blue-500 focus:ring-green-500 focus:ring-offset-green-200 text-[#15365e] w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Be the Next Peerleader
                    </button>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-8 p-10 lg:p-24">
            <img src="https://i.postimg.cc/tJs6cSKh/photo-1546872006-42c78c0ccb29-ixlib-rb-1-2.jpg" className="rounded-lg w-2/5" alt="Tree"/>
            <div>
                <img src="https://i.postimg.cc/8cCPTHgt/product-school-DL-yy-YDDNX4-unsplash.jpg" className="rounded-lg mb-8" alt="Tree"/>
                <img src="https://i.postimg.cc/pLJJpf9K/matthew-ball-Snjyva-Ktx-Po-unsplash.jpg" className="rounded-lg object-cover object-bottom h-56 w-96" alt="Tree"/>
            </div>
        </div>
    </div>
  )
}

export default CtaTwo