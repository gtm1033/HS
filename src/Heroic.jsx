import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';
const Heroic = () => {
    
    const {alljobs} = useSelector(store => store.job)
  return (
    <div>
      <h1 className='text-center font-semibold  md:text-4xl sm:text-3xl text-2xl md:mt-20 mt-16 px-2'><span className='text-blue-600'>Latest Job</span> and Roles</h1>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-8 mx-6'>
        {!alljobs || alljobs.length === 0 ? (
<span className="backdrop-blur-md bg-gray-50 border border-white/20 rounded-lg px-4 py-2 shadow text-center font-semibold text-lg sm:text-xl md:text-2xl text-gray-800">
  No job Available
</span>

) : (
  alljobs.slice(0, 6).map((job) => (
    <div key={job._id}><Card job={job} /></div>
  ))
)}

      </div>
    </div>
  )
}

export default Heroic
