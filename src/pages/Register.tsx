import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Register.css"

export const Register2 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    console.log(firstName, lastName, email, password, passwordConfirm);
    e.preventDefault();
    await axios.post("http://localhost:8000/api/register", {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirm: passwordConfirm,
    });
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <header>
        <Link to={"/login"}>

        </Link>
        <Link id="sign-up-header" className="btn btn-dark" to={"/login"}>
          SIGN IN
        </Link>
      </header>

      <div className="container">
        <form onSubmit={submit} className="form-sign-up">
          <h1 id="H1" className="h3 font-weight-normal">
 registration
          </h1>

          <input
            type="text"
            id="inputEmail"
            className="form-control"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            id="inputEmail"
            className="form-control"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="inputEmail"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Confirm  Password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            style={{ color: "white" }}
            className="btn btn-lg w-100 bg-dark btn-block"
            type="submit"
          >
            Sign up
          </button>
        </form>
        {/* <div className="image-container-register">
          <img className="gif-image-register" src={require("../components/images/gif8.gif")} alt="" />
        </div> */}
      </div>
    </>
  );
};
