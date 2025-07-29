import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-800 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 
      md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <div className='flex flex-row'> <img className="w-8 lg:w-10" src={assets.logo} alt='logo'/>
           <span className="text-lg font-semibold text-white-600">EduBridge</span>
           </div>
         
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Aspernatur accusamus, molestiae iusto quod culpa quasi officiis?
              Architecto similique corrupti eveniet eaque perspiciatis, tenetur
               officiis itaque earum quasi quia fugit cumque.</p>

        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Privacy policy</a></li>
          
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='text-sm text-white/80'>The latest news, articles, and resources, sent to your inbox weekly</p>
          <div className='flex items-center gap-2 pt-4'>
          <input type='email' placeholder='Enter your email' className='border border-gray-500/30 bg-gray-800
          text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'/>
          <button className='bg-orange-600 w-24 h-9 text-white rounded'>Subscribe</button>
          </div>
          
        </div>

      </div>
      <p className='py-4 text-center text-xs md:text-sm  text-white/80'>Copyright 2025© EduBridge. All Rights Reserved. </p>
     
      
    </footer>
  )
}

export default Footer
