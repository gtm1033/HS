import React from 'react'
import { Link } from 'react-router'
const Card = ({job}) => {
  return (
    <div>
      <Link to={`/Description/${job?._id}`}>
      <div className='p-3 rounded-md shadow-xl bg-white border border-blue-400 cursor-pointer '>
       <div className='flex justify-between items-center'>
  <div>
    <h1 className='font-medium text-xl'>{job?.company?.name}</h1>
    <p className='text-lg text-gray-500'>India</p>
  </div>
  <div>
    <img src="/vite.svg" alt="Vite Logo" className="md:h-9 lg:h-10 h-8 w-auto "       loading='lazy' />
  </div>
</div>

        <div className=''>
            <h1 className='font-semibold text-lg sm:my-2 my-1'>{job?.title}</h1>
            <p className='text-lg my-0'>{job?.description}</p>
        </div>
        
        <div className='flex items-center md:gap-2 gap-1 md:mt-4 sm:mt-3 mt-2'>
        <span className="bg-blue-100 text-blue-800 md:text-lg text-md font-medium me-2 sm:px-2.5 px-1 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{job?.position} <p className='md:text-lg sm:text-md text-sm'>position</p></span>
        <span className="bg-red-100 text-red-800 md:text-lg text-sm sm:text-md font-medium me-2 sm:px-2.5 px-1 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">{job?.jobType}</span>
        <span className="bg-green-100 text-green-800 text-sm font-medium me-2 lg:px-2.5 px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{job?.salary} Lakh</span>
 </div>
 
      </div>
      </Link>  
    </div>
  )
}

export default Card
