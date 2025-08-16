import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setloading, setuser } from "./redux/authslice";
import { Link } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const adduser = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !role) {
      setError("All fields are required.");
      return;
    }

    try {
      dispatch(setloading(true));
      const res = await fetch(import.meta.env.VITE_API_URL + "user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (res.status === 200) {
        dispatch(setuser(data.user));
        navigate("/");
      } else {
        setError(data.message || "Login failed.");
        setRole("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      dispatch(setloading(false));
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-10 gap-2 px-4 py-4 sm:py-28">
      <div className="w-full sm:w-1/2 flex justify-center">
        <img
          src="/bg_edit1.jpg"
          alt="Login Visual"
          className="h-64 sm:h-96 w-full object-cover rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      <div className="w-full sm:w-1/2 max-w-md bg-white shadow-md shadow-blue-300 px-8  rounded-lg  relative">
        <h2 className="text-2xl sm:flex hidden font-bold text-center mb-6 text-blue-700">
          Login
        </h2>

        <div className="min-h-[24px] mb-2">
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        </div>

        <form onSubmit={adduser}>
          <div className="relative mb-6">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
              className="peer w-full border border-gray-300 rounded-md px-5 sm:pt-4 pt-2 pb-3 text-sm focus:outline-none focus:border-blue-500 transition-all duration-300"
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

          <div className="relative mb-6">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
              className="peer w-full border border-gray-300 rounded-md px-5 pt-2 sm:pt-4 pb-3 text-sm focus:outline-none focus:border-blue-500 transition-all duration-300"
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

          <div className="mb-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold sm:py-2 py-1 px-4 rounded-md transition-all duration-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <p className="text-sm sm:text-md text-gray-600 text-center mb-2">
            Don’t have an account?{" "}
            <Link to="/Signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
