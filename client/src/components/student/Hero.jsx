import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20
    px-7 md:px-0 space-y-7 text-center bg-orange-100' >
      <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-black-800 max-w-3xl mx-auto relative'>Empower your future with the courses designed to <span className='text-orange-600'> fit your
         choice.</span><img src={assets.sketch} alt='sktch' className='md:block hidden absolute -bottom-7 right-0' /></h1>

         <p className='md:block hidden text-black-100 max-w-2xl mx-auto'> We bring together world-class intructors, 
          interative content, and a supportive community to help you achieve your personal and 
          professional goals</p>

          <p className='md:hidden text-black-100 max-w-sm mx-auto'>We bring together
          world-class instructors to help you achieve your professional goals.</p>
          <SearchBar/>
    </div>
  )
}

export default Hero
