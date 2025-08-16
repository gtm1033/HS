import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setalljobs } from "../redux/jobslice";
const Usergetalljob = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchalljobs = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL + "job/get", {
          credentials: "include",
        });
        const data = await res.json();
        dispatch(setalljobs(data.jobs));
      } catch (error) {
        console.log(error);
      }
    };

    fetchalljobs();
  }, []);
};

export default Usergetalljob;
