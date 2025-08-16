import React, { useState, useEffect } from 'react';
import Job from './Job';
import Filterjob from './Filterjob';
import { useSelector } from 'react-redux';
import { div } from 'framer-motion/client';

const Jobs = () => {
  const { alljobs = [], searchedquery } = useSelector(store => store.job);
  const [filterjobs, setfilterjobs] = useState(alljobs);
  const [showFilter, setShowFilter] = useState(false); 
  const {user} = useSelector( store => store.auth)
  useEffect(() => {
    if (searchedquery) {
      const filteredjob = alljobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedquery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedquery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedquery.toLowerCase()) ||
          job.salary.toString().includes(searchedquery)
        );
      });
      setfilterjobs(filteredjob);
    } else {
      setfilterjobs(alljobs);
    }
  }, [alljobs, searchedquery]);

  return (
    <div>
      {
        user ? 
    <div className="relative mx-auto mt-4 w-full">

      <button
        onClick={() => setShowFilter(!showFilter)}
        className="sm:hidden fixed  left-4 z-50 bg-blue-600 text-white px-3  rounded shadow"
      >
        {showFilter ? '← ' : '☰ '}
      </button>

    
      {showFilter && (
        <div
          className="fixed inset-0  bg-opacity-50 z-30 sm:hidden"
          onClick={() => setShowFilter(false)}
        ></div>
      )}

      <div className="flex gap-5 relative">

        
        <div
          className={`
            bg-gray-100 fixed top-[60px] left-0 z-40 w-[80%] h-full sm:static sm:w-[40%] md:w-[30%] lg:w-[20%] sm:block
            transition-transform duration-300 ease-in-out
            ${showFilter ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0
          `}
        >
          <Filterjob />
        </div>

    
        <div className="flex-1 h-[90vh] overflow-y-auto pb-5 z-10 relative w-full mt-5 sm:mt-7">
          {filterjobs.length <= 0 ? (
            <span className="text-center block text-gray-500 text-lg mt-10">Job not found</span>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-3 mx-4 sm:mx-2">
              {filterjobs.map((job) => (
                <div key={job?._id}>
                  <Job job={job} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>: 
          <div className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
  <div className="text-center p-8 rounded-3xl shadow-lg bg-white border border-gray-200 animate-pulse">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Please Login
    </h1>
    <p className="text-gray-600 text-base md:text-lg">
      You must be logged in to view available jobs.
    </p>
  </div>
</div>

}
    </div>
  );
};

export default Jobs;
