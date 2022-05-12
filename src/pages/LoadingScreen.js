import React from 'react'

const LoadingScreen = () => {
  return (
    <div className='w-full grid h-screen items-center'>
        <div className='m-auto'>
            <img
                src='https://i.postimg.cc/KztDTXgS/fbi-open-up.gif'
                alt='FBI OPEN UP'
                class="max-w-full h-auto rounded-full"
            />
        </div>
    </div>
  )
}

export default LoadingScreen
