import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { setsinglecompany } from "../redux/companyslice";
import { toast } from "react-toastify";

const Companysetup = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [website, setwebsite] = useState("");
  const [location, setlocation] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { singlecompany } = useSelector((store) => store.company);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}company/get/${params.id}`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.success) {
          dispatch(setsinglecompany(data.company));
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompany();
  }, [params.id, dispatch]);

  useEffect(() => {
    if (singlecompany) {
      setname(singlecompany.name || "");
      setdescription(singlecompany.description || "");
      setwebsite(singlecompany.website || "");
      setlocation(singlecompany.location || "");
    }
  }, [singlecompany]);

  const updatecompany = async (e) => {
    e.preventDefault();
    try {
      const payload = { name, description, website, location };
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}company/update/${params.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (data.success) {
        toast.success("Company updated successfully");
        navigate("/");
      } else {
        console.error("Failed to update company:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow"
        >
          Back
        </button>
        <h1 className="text-xl font-semibold">Company Setup</h1>
      </div>

      <form
        onSubmit={updatecompany}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          placeholder="Enter company name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="border border-blue-400 p-3 rounded-md focus:ring-2 focus:ring-blue-300"
          required
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          className="border border-blue-400 p-3 rounded-md focus:ring-2 focus:ring-blue-300"
          required
        />
        <input
          type="text"
          placeholder="Enter website"
          value={website}
          onChange={(e) => setwebsite(e.target.value)}
          className="border border-blue-400 p-3 rounded-md focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          className="border border-blue-400 p-3 rounded-md focus:ring-2 focus:ring-blue-300"
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 shadow"
          >
            Update Company
          </button>
        </div>
      </form>
    </div>
  );
};

export default Companysetup;
