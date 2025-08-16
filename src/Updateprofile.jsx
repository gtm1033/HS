import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setuser } from "./redux/authslice";
const Updateprofile = ({ open, setopen }) => {
  const user = useSelector((store) => store.auth.user);

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [bio, setbio] = useState("");
  const [skills, setskills] = useState("");
  const [file, setfile] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (open && user) {
      setfullname(user.fullname || "");
      setemail(user.email || "");
      setphoneNumber(user.phoneNumber || "");
      setbio(user.profile.bio || "");
      setskills(user.profile?.skills?.join(", ") || "");
    }
  }, [open, user]);
  const updateuser = async (e) => {
    e.preventDefault();
    console.log(file);
    try {
      const payload = {
        fullname,
        email,
        phoneNumber,
        bio,
        skills,
      };

      const response = await fetch(
        import.meta.env.VITE_API_URL + "user/profile/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.status == 200) {
        console.log("Profile updated successfully:", data.user);

        dispatch(setuser(data.user));
      } else {
        console.error("Failed to update profile:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setopen(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="relative p-4 w-full max-w-md max-h-full bg-gray-100 rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Update Profile
          </h3>
          <button
            type="button"
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
            onClick={() => setopen(false)}
          >
            ✖
          </button>
        </div>

        <div className="p-4">
          <form className="space-y-4" onSubmit={updateuser}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your name"
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone Number
              </label>
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bio
              </label>
              <input
                type="text"
                value={bio}
                onChange={(e) => setbio(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Tell something about yourself"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Skills (comma separated)
              </label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setskills(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="e.g. HTML, CSS, JavaScript"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Resume
              </label>
              <input
                type="file"
                onChange={(e) => setfile(e.target.files[0])}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updateprofile;
