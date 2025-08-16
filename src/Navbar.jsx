import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setuser } from "./redux/authslice";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.auth);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const logout = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "user/logout", {
        credentials: "include",
      });
      if (res.status === 200) {
        dispatch(setuser(null));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-12 bg-gradient-to-r  from-blue-300 to-blue-500 via-blue-400    top-0 flex justify-between px-4 sm:px-12 items-center relative">
      <div className="font-bold ">
        <h1 className="text-white sm:text-2xl md:text-3xl text-xl">
          <Link to="/">
            Job<em>AI</em>
          </Link>
        </h1>
      </div>

      <div className="hidden sm:flex">
        <ul className="flex items-center gap-12 ">
          {user.user && user.user.role === "recruiter" ? (
            <>
              <li className="text-xl hover:text-white font-semibold hover:underline">
                <Link to="/admin/company">Companies</Link>
              </li>
              <li className="text-xl hover:text-white font-semibold hover:underline">
                <Link to="/admin/adminjobs">Jobs</Link>
              </li>
            </>
          ) : (
            <>
              <li className="text-xl hover:text-white font-semibold hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className="text-xl hover:text-white font-semibold hover:underline">
                <Link to="/Jobs">Jobs</Link>
              </li>
              <li className="text-xl hover:text-white font-semibold hover:underline">
                <Link to="/Browse">Browse</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div>
        {!user.user ? (
          <div className=" flex gap-8">
            <Link
              className="p-0.5 px-1 hover:text-white text-md sm:text-xl  md:bg-blue-600 bg-blue-500 rounded-lg"
              to="/Login"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="relative inline-block text-left">
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
              <FaUser className="m-1" size={26} />
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2  w-48 md:w-64 bg-gray-50  rounded-md shadow-md shadow-blue-300 z-30 opacity-60"
                >
                  <div className="relative px-2 pb-1 mb-1">
                    <div className="lg:pt-5 pt-2  ml-9 ">
                      <div className="flex gap-2 mt-1 items-center">
                        <MdOutlineAccountCircle
                          onClick={() => navigate("/Profile")}
                          size={24}
                        />
                        <Link
                          to="/Profile"
                          className="hover:bg-gray-100  cursor-pointer text-sm sm:text-md md:text-xl"
                        >
                          {user.user.fullname}
                        </Link>
                      </div>
                      <div className="flex gap-3 mt-2 items-center">
                        <LuLogOut onClick={logout} size={20} />
                        <button
                          className=" text-sm sm:text-md md:text-xl"
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      <div className="sm:hidden relative">
        <div className="cursor-pointer" onClick={() => setDropdown(!dropdown)}>
          {dropdown ? <MdClose size={26} /> : <GiHamburgerMenu size={26} />}
        </div>

        {dropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-50 p-3 mt-2 shadow-md shadow-blue-300  absolute right-0 top-8 w-24 z-50 rounded "
          >
            <ul className="pt-2 space-y-2">
              {user.user && user.user.role === "recruiter" ? (
                <>
                  <li className="text-md hover:text-blue-500 hover:underline">
                    <Link
                      to="/admin/company"
                      onClick={() => setDropdown(false)}
                    >
                      Companies
                    </Link>
                  </li>
                  <li className="text-md hover:text-blue-500 hover:underline">
                    <Link
                      to="/admin/adminjobs"
                      onClick={() => setDropdown(false)}
                    >
                      Jobs
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-md hover:text-blue-500 hover:underline">
                    <Link to="/" onClick={() => setDropdown(false)}>
                      Home
                    </Link>
                  </li>
                  <li className="text-md hover:text-blue-500 hover:underline">
                    <Link to="/Jobs" onClick={() => setDropdown(false)}>
                      Jobs
                    </Link>
                  </li>
                  <li className="text-md hover:text-blue-500 hover:underline">
                    <Link to="/Browse" onClick={() => setDropdown(false)}>
                      Browse
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
