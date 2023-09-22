import React, { useState } from "react";
import "../../Styles/Login.css";
import image1 from '../../Assets/img/log.svg'
import image2 from '../../Assets/img/register.svg'
const Login = () => {
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
          <form action="#" className="sign-in-form">
            <h2 className="title">Log In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input className="inputarea" type="text" placeholder="Email Id" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input className="inputarea" type="password" placeholder="Password" />
            </div>
            <input  type="submit" value="Login" className="inputarea btn solid" />
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Register</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input className="inputarea" type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input className="inputarea" type="email" placeholder="Email Id" />
            </div>
            <div className="input-field">
              <i className="fas fa-registered"></i>
              <input className="inputarea" type="text" placeholder="Phone Number" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input className="inputarea" type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-key"></i>
              <input className="inputarea" type="password" placeholder="Re-Enter Password" />
            </div>
            <input type="submit" className=" btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container1">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Register to the PetroStats</p>
            <button
              className="btn "
              onClick={toggelSwitch}
              id="sign-up-btn"
            >
              Register
            </button>
          </div>
          <img src={image1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Log In to Petro Stats</p>
            <button
              className="btn "
              onClick={toggelSwitch}
              id="sign-in-btn"
            >
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
