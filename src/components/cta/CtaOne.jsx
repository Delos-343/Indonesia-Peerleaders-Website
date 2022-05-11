/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const CtaOne = () => {
  return (
    <div className="container rounded-0 sm:rounded-lg mx-auto bg-[#215aa8]">
      <div className="px-10 py-20 lg:flex lg:justify-center">
        <div className="">
          <h1 className="text-3xl font-bold text-center text-gray-100">
            Empowering young individuals in becoming the future leaders of the FMCG industry.
          </h1>
          <div className="items-center justify-center mt-10 lg:flex lg:gap-2">
            <a
              className="
                block
                px-8
                py-2
                mt-6
                text-lg
                font-medium
                text-center text-[#15365e]
                rounded
                bg-white
                md:mt-0
              "
              href="#"
              >
                Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaOne