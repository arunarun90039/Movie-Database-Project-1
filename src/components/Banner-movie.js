import React from 'react';
import juman from "../assests/juman.png"

export const Banner = () => {
  return (
    <div
      className='poster items-end'
      style={{
        height: '600px',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${juman})`,
        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        

      }}>
     <div className='text-white text-xl text-center w-full bg-gray-900/70 p-4'> MOVIES </div>
    </div>
  )
}
