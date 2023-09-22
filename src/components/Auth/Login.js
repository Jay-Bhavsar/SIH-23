import React, { useState } from "react";
import "../Style/Login.css";
import Navbar from "../Home/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
// import Footer from "../Home/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { login } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/user");
      // navigate("/part1")
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />

      <center>
        <div className="bg-blue-600 w-[100%] shadow-xl md:w-[60%] text-white font-extrabold text-xl p-3">
          <h2>PGRKAM</h2>
          <h2>Login to Apply</h2>
        </div>
        <div className="flex flex-col border-red-700 shadow-xl w-[100%] md:w-[60%] md:flex-row">
          {error && <div>{error}</div>}
          <div className="flex flex-col justify-center items-center w-[100%] md:w-[50%] p-4">
            <br />
            {/* <img src={punjab} alt="" className="w-[100px] h-[100px]" /> */}
            <br />
            <h1 className="text-xl font-bold">
            PGRKAM -Program
            </h1>
            <h4 className="">
            PUNJAB GHAR GHAR ROZGAR
            </h4>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center w-[100%] md:w-[50%] h-[100%] shadow-xl"
          >
            <center>
            <h3>Login</h3>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-[80%]"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-[80%]"
            />
            <button className="button">Log In</button>

            <p className="mr-16">
              <Link to="/forgetpass" className="text-red-700-950">
                Forget Password
              </Link>
            </p>

            <p className="mt-3">
              Don't have a account? <Link to="/signup"> Sign Up</Link>
            </p>
            </center>
           
          </form>

        </div>
      </center>
      <br />
      <br />
      {/* <Footer /> */}
    </>
  );
}

export default Login;
