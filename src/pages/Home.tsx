import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css"

export const Home = () => {
  const [message, setMessage] = useState("You are not authenticated");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user", {
          withCredentials: true,
        });
        const user = response.data;
        setMessage(`Hi, ${user.first_name} `);
      } catch (err) {
        setMessage("You are not authenticated");
      }
    })();
  }, []);
  return (
    <>
      <h3>{message}</h3>
    </>
  );
};
