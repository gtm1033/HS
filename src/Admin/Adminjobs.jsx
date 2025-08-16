import React from 'react';
import Adminjobtable from './Adminjobtable';
import { useNavigate } from 'react-router';

const Adminjobs = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate('/admin/adminpostjob');
  };

  return (
    <div className="p-4 md:p-10">
    <h1 className='lg:m-6 m-4  text-center font-semibold md:text-2xl sm:text-xl text-lg'>Create a new Job and show a Job table </h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-around gap-8  mx-2 mb-6">
        <input
          type="text"
          placeholder="Search for company"
          className="w-full sm:w-1/2 border border-blue-400 shadow sm:p-2 p-1 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={handle}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
        >
          + New Jobs
        </button>
      </div>

      
      <div className="overflow-x-auto">
        <Adminjobtable />
      </div>
    </div>
  );
};

export default Adminjobs;
