import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setalladminjobs } from "../redux/jobslice";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { CiEdit } from "react-icons/ci";
const Adminjobtable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { alladminjobs } = useSelector((store) => store.job);
  useEffect(() => {
    const fetchadminjobs = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL + "job/getadminjobs",
          {
            credentials: "include",
          }
        );
        const data = await res.json();

        if (data.jobs) {
          dispatch(setalladminjobs(data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchadminjobs();
  }, [dispatch]);
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="text-center w-full max-w-5xl p-4">
          <h1 className="sm:text-2xl text-xl font-bold m-4">Companies</h1>
          <div className="overflow-x-auto shadow-lg shadow-blue-400">
            <table className="table-auto w-full min-w-[800px] border-collapse mx-auto shadow-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-6 py-4 text-lg">Company</th>
                  <th className="border px-6 py-4 text-lg">Date</th>

                  <th className="border px-6 py-4 text-lg">Title</th>

                  <th className="border px-6 py-4 text-lg">Applicants</th>
                </tr>
              </thead>
              <tbody>
                {alladminjobs?.map((job) => (
                  <tr key={job._id} className="hover:bg-gray-100">
                    <td className="border px-6 py-5">
                      {job.company?.name || "N/A"}
                    </td>
                    <td className="border px-6 py-5">
                      {new Date(job.createdAt).toLocaleDateString()}
                    </td>
                    <td className="border px-6 py-5">{job.title}</td>

                    <td className="border px-6 py-5">
                      <button
                        onClick={() =>
                          navigate(`/admin/jobs/${job._id}/applicants`)
                        }
                      >
                        <h1 className="font-semibold text-blue-400 hover:text-blue-600 underline cursor-pointer">
                          click here
                        </h1>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminjobtable;
