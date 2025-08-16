import React, { useEffect } from "react";
import Applicantstable from "./Applicantstable";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setallapplicants } from "../redux/applicationslice";

const Applicants = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}application/${id}/applicants`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.job) {
          dispatch(setallapplicants(data.job));
        } else {
          console.error("Error fetching applicants:", data.message);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };

    fetchAllApplicants();
  }, [dispatch, id]);

  return (
    <div className="px-4 py-10">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Applicants ({applicants?.applications?.length || 0})
      </h1>

      {applicants?.applications?.length > 0 ? (
        <Applicantstable />
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No applicants found for this job.
        </p>
      )}
    </div>
  );
};

export default Applicants;
