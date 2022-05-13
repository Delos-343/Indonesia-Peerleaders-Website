import React from 'react'
import { BsArrowClockwise } from 'react-icons/bs'

const LoadingScreen = () => {
  return (
    <div className='w-full grid h-screen items-center'>
        <div className='m-auto'>
            <img
                src='https://i.postimg.cc/KztDTXgS/fbi-open-up.gif'
                alt='FBI OPEN UP'
                class="max-w-full h-auto rounded-full"
            />
            <div className='container flex m-auto py-14 font-bold text-3xl text-center tracking-wider'>
              <BsArrowClockwise className='animate-spin mx-10' />
              <h1 className='hidden sm:block'>
                LOADING ...
              </h1>
            </div>
        </div>
    </div>
  )
}

export default LoadingScreen
