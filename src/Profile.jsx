import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoMdMailUnread } from 'react-icons/io';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import Updateprofile from './Updateprofile';
import Appliedjob from './Appliedjob';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [open, setopen] = useState(false);
  const { user } = useSelector(store => store.auth);

  return (
    <div className="px-4 py-6">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/vite.svg"
              alt="Profile"
              className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-cover rounded-full"
                    loading='lazy'
            />
            <div>
              <h1 className="font-semibold text-lg sm:text-xl">{user?.fullname}</h1>
              <p className="text-sm sm:text-base text-gray-600">{user?.profile?.bio}</p>
            </div>
          </div>
          <button onClick={() => setopen(true)} className="self-start sm:self-auto text-gray-600 hover:text-black">
            <CiEdit size={24} />
          </button>
        </div>

      
        <div className="mt-6 space-y-3 text-sm sm:text-base">
          <div className="flex items-center gap-3 text-gray-700">
            <IoMdMailUnread className="text-lg" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaPhoneSquareAlt className="text-lg" />
            <span>{user?.phoneNumber || 'NA'}</span>
          </div>
        </div>

      
        <div className="mt-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills && user?.profile?.skills.length > 0 ? (
              user.profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">NA</span>
            )}
          </div>
        </div>
      </div>

  
      {user && user.role !== 'recruiter' && (
        <div className="mt-6">
          <Appliedjob />
        </div>
      )}

    
      <Updateprofile open={open} setopen={setopen} />
    </div>
  );
};

export default Profile;
