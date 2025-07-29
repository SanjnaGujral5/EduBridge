import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets';
import {UserButton, useUser} from '@clerk/clerk-react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const educatorData = dummyEducatorData
  const { user } = useUser()
  return (
    <div className='flex items-center justify-between px-4 md:px-8
    border-b border-gray-500 py-3 bg-orange-500'>
      <Link to='/'>
      <div className='flex items-center gap-2'>
           <img src={assets.logo} alt='Logo' className='w-4 lg:w-8' />
            <span className="text-lg font-semibold text-black-600">EduBridge</span>
      </div>
   
      </Link>
      <div className='flex items-center gap-5 text-gray-500 relative'>
        <p>Hi! {user ? user.fullName : 'Developers'}</p>
        {user ? <UserButton /> : <img className='w-8' src={assets.profile_img} />}
      </div>
    
    </div>
  )
}

export default Navbar
