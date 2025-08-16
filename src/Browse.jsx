import React, { useEffect } from "react";
import Job from "./Job";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setalljobs, setsearchedquery } from "./redux/jobslice";
import { div } from "framer-motion/client";
const Browse = () => {
  const { alljobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const { searchedquery } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    const fetchall = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}job/get?keyword=${searchedquery}`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.success) {
          dispatch(setalljobs(data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (searchedquery !== "") {
      fetchall();
    }
  }, [searchedquery, dispatch]);
  useEffect(() => {
    return () => {
      dispatch(setsearchedquery(""));
    };
  }, []);
  return (
    <div>
      {user ? (
        <div className="mx-auto max-w-7xl my-10">
          <h1 className="font-semibold text-xl mx-3 ">
            Search Results ({alljobs.length})
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-8 mx-6 mt-5">
            {alljobs.map((job) => (
              <div key={job._id}>
                <Job job={job} />
              </div>
            ))}
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Browse;
