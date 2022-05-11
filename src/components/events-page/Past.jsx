import React from 'react'

const Past = () => {
  return (
    <div className="overflow-hidden text-white my-20">
        <div className="container px-5 py-10 mx-auto lg:py-12 lg:px-32 bg-[#215aa8] rounded-0 sm:rounded-lg">
        <h1 className='text-center text-4xl font-bold mb-10'> Past Events </h1>
            <div className="flex flex-wrap -m-2 md:-m-4">
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full border"
                        src="https://i.postimg.cc/6p0RQm42/IPL-crack-the-case.jpg" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full border"
                        src="https://i.postimg.cc/J7PCJQwh/paragonDay_speakers.png" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full border"
                        src="https://i.postimg.cc/J79pvLY5/Peers-Conference-3.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Past
