import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Applicantstable = () => {
  const shortlist = ["Accepted", "Rejected"];
  const { applicants } = useSelector((store) => store.application);

  const statushandler = async (status, id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}application/status/${id}/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ status }),
        }
      );
      const data = await res.json();
      if (data.success) toast.success(data.message);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="px-4 py-8">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-6 py-4 border font-semibold">Full Name</th>
                <th className="px-6 py-4 border font-semibold">Email</th>
                <th className="px-6 py-4 border font-semibold">Contact</th>
                <th className="px-6 py-4 border font-semibold">Date</th>
                <th className="px-6 py-4 border font-semibold text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {applicants?.applications?.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 border">
                    {item?.applicant?.fullname}
                  </td>
                  <td className="px-6 py-4 border">{item?.applicant?.email}</td>
                  <td className="px-6 py-4 border">
                    {item?.applicant?.phoneNumber}
                  </td>
                  <td className="px-6 py-4 border">
                    {new Date(item.applicant.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 border text-center space-x-2">
                    {shortlist.map((status, index) => (
                      <button
                        key={index}
                        onClick={() => statushandler(status, item?._id)}
                        className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
                          status === "Accepted"
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-red-100 text-red-700 hover:bg-red-200"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Applicantstable;
