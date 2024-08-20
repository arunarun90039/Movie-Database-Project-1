import React from 'react'

export const Page = ({pageNo,handlePrevious,handleNext}) => {
  return (
    <div className="bg-teal-600 flex justify-center p-5">
     <div className='px-8' onClick={handlePrevious}><i class="fa-solid fa-arrow-left"></i></div>  <div><strong>{pageNo}</strong></div>
    <div className='px-8' onClick={handleNext}><i class="fa-solid fa-arrow-right-long"></i></div>
    </div>
  )
}
