import axios from "axios";
import { SyntheticEvent, useState ,useEffect} from "react";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/api/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>

      <header>
        <Link to={"/login"}>

        </Link>
        <Link id="sign-up-header" className="btn btn-dark" to={"/register"}>
          SIGN UP
        </Link>
      </header>
      <div className="form">
      <main className="form-signin w-100 m-auto">
          <form onSubmit={submit}>
            <div className="form-floating">
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox ">
              <label>
                <input
                  type="checkbox"
                  style={{ color: "purple" }}
                  value="remember-me"
                />{" "}
                Remember me 
              </label>
            </div>
            <button
              id="sign-in-button"
              className="w-100 btn btn-lg bg-dark"
              type="submit"
            >
              Log in
            </button>
            <p className="new-to-bnch">
              <Link style={{ color: "black" }} to={"/register"}>
                New to **** ? Sign up!
              </Link>
            </p>
          </form>
        </main>

      </div>
    </>
  );
};

export default Login;
