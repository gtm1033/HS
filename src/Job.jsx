import React, { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Job = ({ job }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true); 
    toast.success("Saved successfully"); 
  };

  const navigate = useNavigate();

  return (
    <div className='p-2 rounded-md bg-white border border-blue-300 shadow-lg'>
      <div className='flex items-center justify-between'>
        <p>{new Date(job.createdAt).toLocaleDateString()}</p>
        <button className='rounded-full' variant="outline"><CiBookmark /></button>
      </div>
      <div className='flex items-center sm:gap-10 gap-8 my-2'>
        <button className='p-1' variant="outline">
          <img src="/vite.svg" alt=""       loading='lazy'/>
        </button>

        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg lg:my-2 sm:my-1'>{job?.title}</h1>
        <p className='text-sm'>{job?.description}</p>
      </div>
      <div className='flex items-center md:gap-2 gap-1 mt-4'>
        <span className="bg-blue-100 text-blue-800 md:text-lg text-md font-medium me-2 sm:px-2.5 px-1 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{job?.position} <p className='md:text-lg sm:text-md text-sm'>position</p></span>
        <span className="bg-red-100 text-red-800 md:text-lg text-sm sm:text-md font-medium me-2 sm:px-2.5 px-1 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">{job?.jobType}</span>
        <span className="bg-green-100 text-green-800 text-sm font-medium me-2 lg:px-2.5 px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{job?.salary} Lakh</span>
      </div>
      <div className='flex items-center sm:gap-5 gap-4 mt-4'>
        <button
          className='underline'
          variant="outline"
          onClick={() => navigate(`/Description/${job?._id}`)}
        >
          Details
        </button>

        <button
          onClick={handleSave}
          disabled={isSaved} 
          className={`bg-blue-300 hover:bg-blue-400 p-0.5 rounded-lg ${isSaved ? 'bg-blue-100 cursor-not-allowed' : ''}`}
        >
          {isSaved ? 'Saved' : 'Save for later'}
        </button>
      </div>
    </div>
  );
}

export default Job;
