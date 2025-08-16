import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setallappliedjobs } from "./redux/jobslice";

const AppliedJob = () => {
  const dispatch = useDispatch();
  const { allappliedjobs } = useSelector((store) => store.job);

  useEffect(() => {
    const fetchapplied = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL + "application/get",
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.success) {
          dispatch(setallappliedjobs(data.application));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchapplied();
  }, [dispatch]);

  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Applied Jobs
        </h1>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-[600px] w-full text-left border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-sm sm:text-base">
                <th className="border px-4 sm:px-6 py-3">Date</th>
                <th className="border px-4 sm:px-6 py-3">Job</th>
                <th className="border px-4 sm:px-6 py-3">Company</th>
                <th className="border px-4 sm:px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {allappliedjobs.length <= 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-sm text-gray-500 py-5"
                  >
                    You have not applied to any jobs
                  </td>
                </tr>
              ) : (
                allappliedjobs
                  .filter((item) => item.job?.title && item.job?.company)
                  .map((item) => (
                    <tr
                      key={item._id}
                      className="hover:bg-gray-50 text-sm sm:text-base"
                    >
                      <td className="border px-4 sm:px-6 py-4">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="border px-4 sm:px-6 py-4">
                        {item.job.title}
                      </td>
                      <td className="border px-4 sm:px-6 py-4">
                        {item.job.company.name}
                      </td>
                      <td className="border px-4 sm:px-6 py-4 text-blue-600 font-medium">
                        {item.status}
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
