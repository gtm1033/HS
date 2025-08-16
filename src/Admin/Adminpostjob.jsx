import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Adminpostjob = () => {
  const { companies } = useSelector((store) => store.company);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [requirements, setrequirements] = useState("");
  const [salary, setsalary] = useState("");
  const [location, setlocation] = useState("");
  const [jobType, setjobtype] = useState("");
  const [experience, setexperience] = useState("");
  const [position, setposition] = useState("");
  const [companyId, setcompanyid] = useState("");

  const navigate = useNavigate();

  const savejob = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "job/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Job saved successfully");
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-600">
        Post a New Job
      </h1>

      <form
        onSubmit={savejob}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md"
      >
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className="input-field border border-gray-300 rounded-md p-2"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          className="input-field border border-gray-300 rounded-md p-2"
          required
        />
        <input
          type="text"
          placeholder="Requirement(eg Js, Css)"
          value={requirements}
          onChange={(e) => setrequirements(e.target.value)}
          className="input-field border border-gray-300 rounded-md p-2"
          required
        />
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setsalary(e.target.value)}
          className="input-field border border-gray-300 rounded-md p-2"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          className="input-field border border-gray-300 rounded-md p-2"
          required
        />
        <input
          type="text"
          placeholder="Job Type"
          value={jobType}
          onChange={(e) => setjobtype(e.target.value)}
          className="input-field border border-gray-300 rounded-md p-2"
          required
        />
        <input
          type="text"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setexperience(e.target.value)}
          className="input-field border border-gray-300 rounded-md p-2"
          required
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setposition(e.target.value)}
          className="input-field border border-gray-300 rounded-md p-2"
          required
        />

        <select
          value={companyId}
          onChange={(e) => setcompanyid(e.target.value)}
          className="input-field border border-gray-300 rounded-md p-2 md:col-span-2"
          required
        >
          <option value="">Select a Company </option>
          {companies.map((company) => (
            <option key={company._id} value={company._id}>
              {company.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition md:col-span-2"
        >
          Save Job
        </button>
      </form>
    </div>
  );
};

export default Adminpostjob;
