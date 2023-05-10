import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css"
import { Link } from "react-router-dom";

export const Home = () => {
  const [message, setMessage] = useState("");
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link id="sign-up-header" className="btn btn-dark" to={"/login"}>
          LOGIN
        </Link>      </nav>
      <h3>{message}</h3>
    </>
  );
};
