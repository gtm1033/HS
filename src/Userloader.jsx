import React from "react";
import { setloading, setuser } from "./redux/authslice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Userloader = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchuser = async () => {
      try {
        dispatch(setloading(true));
        const res = await fetch(import.meta.env.VITE_API_URL + "user/getuser", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          dispatch(setuser(data.user));
        }
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setloading(false));
      }
    };
    fetchuser();
  }, []);
  return <div></div>;
};

export default Userloader;
