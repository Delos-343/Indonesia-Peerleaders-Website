/* eslint-disable jsx-a11y/no-redundant-roles */

import React from 'react'

const Poster = () => {
  return (
    <div className="py-12 bg-gray-100 overflow-y-hidden">
            {/* Code block starts */}
        <dh-component>
            <div className="w-full px-6">
                <div className="mt-8 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                    <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                    <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                    <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                        <h1 className="text-white text-4xl sm:text-6xl font-bold tracking-tight mb-12">
                            CRACK-THE-CASE: <br />
                            <span class="text-3xl text-gray-200 font-semibold leading-0 sm:text-5xl">
                                Hands-On Business Workshop
                                &amp; Paragon Case Challenge
                            </span>
                        </h1>
                    </div>
                    <div className="flex justify-center items-center mb-10 sm:mb-20">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSewDxLXHyd5D4wN-nQM0TjnDa27WqhB5l9EAtkKk7Px0WRMKQ/viewform" target="_blank" rel="noreferrer">
                            <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-0 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white rounded text-white px-4 sm:px-8 py-1 sm:py-3 text-sm font-bold">
                            Register Now
                            </button>
                        </a>
                        <a href="mailto:peerleadersindonesia@gmail.com"
                           className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                           data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">
                            <button className="lg:text-xl ml-3 sm:ml-6 bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-blue-600 px-4 sm:px-8 py-1 sm:py-3 text-sm font-bold">
                                Contact Us
                            </button>
                        </a>
                    </div>
                </div>
                <div className="container mx-auto flex justify-center md:-mt-64 -mt-20 sm:-mt-40">
                    <div className="relative sm:w-2/3 w-11/12">
                        <img src="https://i.postimg.cc/6p0RQm42/IPL-crack-the-case.jpg" alt="Poster" role="img" />
                    </div>
                </div>
            </div>
        </dh-component>
          {/* Code block ends */}
    </div>
  )
}

export default Poster
