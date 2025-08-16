import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setcompany } from "../redux/companyslice";
import { useNavigate } from "react-router";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";
const Companytable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { companies } = useSelector((state) => state.company);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL + "company/get", {
          credentials: "include",
        });
        const data = await res.json();
        if (data.companies) {
          dispatch(setcompany(data.companies));
        } else {
          console.error("Server message:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchCompanies();
  }, [dispatch]);

  if (!companies || companies.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">No companies found.</div>
    );
  }

  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="sm:text-2xl text-xl font-semibold mb-6 text-center">
          Companies
        </h1>
        <div className="overflow-x-auto   shadow-blue-400 shadow-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-left px-6 py-3 border">Company</th>
                <th className="text-left px-6 py-3 border">Date</th>
                <th className="text-center px-6 py-3 border">Edit</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-blue-50 transition-all border-t border-gray-200"
                >
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() =>
                        navigate(`/admin/companysetup/${item._id}`)
                      }
                      aria-label={`Edit ${item.name}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <CiEdit size={26} />
                    </button>
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

export default Companytable;
