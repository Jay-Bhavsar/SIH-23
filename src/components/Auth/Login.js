import React, { useState } from "react";
import "../Styles/Login.css";

import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import Header from "../Layout/Header";

import image1 from "../Assets/img/log.svg";
import image2 from "../Assets/img/register.svg";
import { Box, HStack, Heading, Image } from "@chakra-ui/react";
// import Footer from "../Home/Footer";

const Login = () => {
  const [firstname, setFirstname] = useState("");
  const [mobNo, setmobNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [error, setError] = useState();
  const { signUp } = useUserAuth();
  const { login } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    alert("You have Signed In");
    setError("");
    setMessage("");

    const newUser = {
      firstname,
      email,
      mobNo,
      role: "user",
    };
    console.log(newUser);

    try {
      await signUp(email, password, newUser);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/user");
    } catch (err) {
      setError(err.message);
    }
  };

  const [switchToggled, setSwitchToggled] = useState(false);
  const toggelSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
  };

  return (
    <div
      class={
        switchToggled ? "container1 sign-in-mode" : "container1 sign-up-mode"
      }
    >
      <div className="forms-container1">
        <div className="signin-signup">
          <form action="" onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Log In</h2>
            {/* {error && <div>{error}</div>} */}
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                className="inputarea"
                type="text"
                placeholder="Email Id"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                className="inputarea"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="inputarea btn solid"
            />
          </form>
          <form action=""
            onSubmit={handleSubmit2} className="sign-up-form">
            <h2 className="title">Register</h2>
            {/* <div className="input-field">
              <i className="fas fa-user"></i>
              <input className="inputarea" type="text" placeholder="Name" 
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                className="inputarea"
                type="email"
                placeholder="Email Id"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-registered"></i>
              <input
                className="inputarea"
                type="text"
                placeholder="Phone Number"
                onChange={(e) => {
                  setmobNo(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                className="inputarea"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {/* <div className="input-field">
              <i className="fas fa-key"></i>
              <input
                className="inputarea"
                type="password"
                placeholder="Re-Enter Password"
              />
            </div> 

            <input type="submit" className=" btn" value="Sign up" /> */}
            <HStack
              marginY={'100px'}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Link width={'50%'} to={'/authuser'}>
                <Box
                  width={'100%'}
                  height={'auto'}
                  paddingY={'20px '}
                  boxShadow={'0px 10px 61px 10px rgba(0,0,0,0.1)'}
                  paddingX={'30px'}
                  borderRadius={'10%'}
                >
                  <Image src={image1} />
                  <Heading
                    fontSize={'20px'}
                    fontWeight={'medium'}
                    textAlign={'center'}
                    fontFamily={'montserrat'}
                  >
                    As User
                  </Heading>
                </Box>
              </Link>
              {/* <Box width={'10px'} height={'200px'} backgroundColor={'orange'}></Box> */}
              <Link width={'50%'} to={'/authorg'}>
                <Box
                  width={'100%'}
                  height={'auto'}
                  paddingY={'20px'}
                  boxShadow={'0px 10px 61px 10px rgba(0,0,0,0.1)'}
                  paddingX={'30px'}
                  borderRadius={'10%'}
                >
                  <Image src={image1} />

                  <Heading
                    fontSize={'20px'}
                    fontWeight={'medium'}
                    textAlign={'center'}
                    fontFamily={'montserrat'}
                  >
                    As Orgranization
                  </Heading>
                </Box>
              </Link>
            </HStack>
          </form>
        </div>
      </div>
      <div className="panels-container1">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Register to the PGRKAM</p>
            <button className="btn " onClick={toggelSwitch} id="sign-up-btn">
              Register
            </button>
          </div>
          <img src={image1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Log In to PGRKAM</p>
            <button className="btn " onClick={toggelSwitch} id="sign-in-btn">
              Log In
            </button>
          </div>
          <img src={image2} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
