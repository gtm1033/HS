import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setsinglejob } from "./redux/jobslice";
import { useParams } from "react-router";

const Description = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { singlejob } = useSelector((store) => store.job);
  const { id: jobId } = useParams();

  const [isapplied, setisapplied] = useState(false);

  const applyjobhander = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}application/apply/${jobId}`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();

      if (data.success) {
        setisapplied(true);
        const updatesinglejob = {
          ...singlejob,
          applications: [...singlejob.applications, { applicant: user?._id }],
        };
        dispatch(setsinglejob(updatesinglejob));
      } else {
        setisapplied(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchsinglejob = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}job/get/${jobId}`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        dispatch(setsinglejob(data.job));

        const applied = data.job.applications?.some((application) => {
          const applicantId =
            application?.applicant?._id || application?.applicant;
          return applicantId?.toString() === user?._id?.toString();
        });

        setisapplied(applied);
      } catch (error) {
        console.log(error);
      }
    };

    fetchsinglejob();
  }, [jobId, dispatch, user?._id]);

  if (!singlejob) {
    return <p className="text-center mt-10">Loading job details...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-bold text-2xl text-blue-900">
            {singlejob.title}
          </h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-sm">
              {singlejob.position} position
            </span>
            <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded-sm">
              {singlejob.jobType}
            </span>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
              {singlejob.salary} LPA
            </span>
          </div>
        </div>

        <button
          onClick={isapplied ? null : applyjobhander}
          disabled={isapplied}
          className={`w-full sm:w-auto text-center rounded-lg px-4 lg:py-2 py-1 text-white font-semibold transition ${
            isapplied
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 "
          }`}
        >
          {isapplied ? "Already Applied" : "Apply Now"}
        </button>
      </div>

      <h2 className="border-b-2 border-gray-300 font-semibold text-lg mt-8 pb-2">
        Job Description
      </h2>

      <div className="mt-4 space-y-3 text-gray-800 text-sm sm:text-base">
        <p>
          <strong>Role:</strong> <span className="pl-2">{singlejob.title}</span>
        </p>
        <p>
          <strong>Location:</strong>{" "}
          <span className="pl-2">{singlejob.location}</span>
        </p>
        <p>
          <strong>Description:</strong>{" "}
          <span className="pl-2">{singlejob.description}</span>
        </p>
        <p>
          <strong>Experience:</strong>{" "}
          <span className="pl-2">{singlejob.experienceLevel} years</span>
        </p>
        <p>
          <strong>Salary:</strong>{" "}
          <span className="pl-2">{singlejob.salary} LPA</span>
        </p>
        <p>
          <strong>Total Applications:</strong>{" "}
          <span className="pl-2">{singlejob.applications.length}</span>
        </p>
        <p>
          <strong>Posted Date:</strong>{" "}
          <span className="pl-2">
            {new Date(singlejob.createdAt).toLocaleDateString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Description;
