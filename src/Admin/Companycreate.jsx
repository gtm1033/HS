import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setsinglecompany } from "../redux/companyslice";
import { setloading } from "../redux/authslice";
import { toast } from "react-toastify";
const Companycreate = () => {
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.auth);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!companyName.trim()) {
      toast.error("Company name is required");
      return;
    }

    try {
      dispatch(setloading(true));
      const res = await fetch(
        import.meta.env.VITE_API_URL + "company/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ companyName }),
        }
      );

      const data = await res.json();
      if (data.success) {
        dispatch(setsinglecompany(data.company));
        navigate(`/admin/companysetup/${data.company._id}`);
      } else {
        console.log(data.message);
        setCompanyName("");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      dispatch(setloading(false));
    }
  };

  return (
    <div className="flex flex-col items-center mt-16 px-4">
      <h1 className="text-xl font-bold mb-4">Create a Company</h1>
      <input
        type="text"
        placeholder="Enter Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="w-full max-w-md border border-blue-500 sm:p-3 p-1.5 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        onClick={handleCreate}
        disabled={loading}
        className={`mt-4 w-full max-w-md sm:p-3 p-1.5 rounded-md text-white font-medium shadow ${
          loading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Creating..." : "Create Company"}
      </button>
    </div>
  );
};

export default Companycreate;
