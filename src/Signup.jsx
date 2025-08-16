import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setloading } from "./redux/authslice";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [fullname, setfullname] = useState("");
  const [file, setFile] = useState(null);
  const [role, setRole] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const adduser = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!fullname || !email || !password || !role || !phoneNumber) {
      setError("All fields are required.");
      return;
    }

    try {
      dispatch(setloading(true));
      const res = await fetch(import.meta.env.VITE_API_URL + "user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, email, password, phoneNumber, role }),
      });

      const data = await res.json();

      if (res.status === 201) {
        navigate("/Login");
      } else {
        setError(data.message || "Signup failed.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      dispatch(setloading(false));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-10  px-4  sm:py-15  min-h-screen">
      <div className="w-full sm:w-1/2 flex justify-center">
        <img
          src="/bg_edit1.jpg"
          alt="Signup Visual"
          className="h-48 sm:h-112 w-full object-cover rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      <div className="w-full sm:w-1/2 max-w-md bg-white px-8 md:py-6 py-2 rounded-lg  shadow-md shadow-blue-300 relative">
        <h2 className="text-2xl sm:flex hidden font-bold text-center mb-3 text-blue-700">
          Sign Up
        </h2>

        <div className="min-h-[24px] mb-2">
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        </div>

        <form onSubmit={adduser}>
          <div className="relative mb-6">
            <input
              type="text"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              required
              id="fullname"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-md px-5 sm:pt-4 pt-2  sm:pb-3 pb-1 text-sm focus:outline-none focus:border-blue-500 transition-all duration-300"
            />
            <label
              htmlFor="fullname"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white px-1 text-gray-500 text-sm pointer-events-none transition-all duration-300
                peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-blue-500
                peer-valid:top-0 peer-valid:-translate-y-2 peer-valid:text-xs peer-valid:text-blue-500"
            >
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              id="email"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-md px-5 sm:pt-4 pt-2 sm:pb-3 pb-1  text-sm focus:outline-none focus:border-blue-500 transition-all duration-300"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white px-1 text-gray-500 text-sm pointer-events-none transition-all duration-300
                peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-blue-500
                peer-valid:top-0 peer-valid:-translate-y-2 peer-valid:text-xs peer-valid:text-blue-500"
            >
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              id="password"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-md px-5 sm:pt-4 pt-2 sm:pb-3 pb-1  text-sm focus:outline-none focus:border-blue-500 transition-all duration-300"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white px-1 text-gray-500 text-sm pointer-events-none transition-all duration-300
                peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-blue-500
                peer-valid:top-0 peer-valid:-translate-y-2 peer-valid:text-xs peer-valid:text-blue-500"
            >
              Password
            </label>
          </div>

          {/* Phone Number */}
          <div className="relative mb-6">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              required
              id="phoneNumber"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-md px-5 sm:pt-4 pt-2 sm:pb-3 pb-1  text-sm focus:outline-none focus:border-blue-500 transition-all duration-300"
            />
            <label
              htmlFor="phoneNumber"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white px-1 text-gray-500 text-sm pointer-events-none transition-all duration-300
                peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-blue-500
                peer-valid:top-0 peer-valid:-translate-y-2 peer-valid:text-xs peer-valid:text-blue-500"
            >
              Phone Number
            </label>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <p className="mb-2 text-sm lg:text-lg font-medium text-gray-700">
              Select Role:
            </p>
            <div className="flex gap-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === "student"}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-radio text-blue-600"
                />
                <span className="text-sm lg:text-lg">Student</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={role === "recruiter"}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-radio text-blue-600"
                />
                <span className="text-sm lg:text-lg">Recruiter</span>
              </label>
            </div>
          </div>

          {/* File Upload (optional) */}
          <div className="relative mb-6">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              id="file"
              className="peer w-full border border-gray-300 rounded-md px-4 lg:pt-5 pt-2 pb-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="mb-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold sm:py-2 py-1 px-4 rounded-md transition-all duration-300"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </div>

          <p className="text-sm sm:text-md md:text-lg text-gray-600 text-center mb-2">
            Already have an account?{" "}
            <Link to="/Login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
