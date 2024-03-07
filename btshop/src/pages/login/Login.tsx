import React from "react";
import './style/style.css';
import '../../styles/style.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-center mt-5">
      <div id="login-container" className="d-flex">
        <form action="#" id="login-form" className="d-flex dir-column section-padding">
          <label htmlFor="chk" aria-hidden="true" className="font-archivo font-900 mb-5">LOGIN</label>
          <input type="email" name="email" placeholder="EMAIL" className="mt-1" required />
          <input type="password" name="password" placeholder="PASSWORD" className="mt-1" required />
          <input type="submit" value="SIGN IN" className="font-archivo font-900 mt-2" />
        </form>
        <div id="test">
          <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="login image" />
        </div>
        <div id="right-img" className="section-padding">
          <Link to={"/sign-up"} id="form-type-btn" className="font-archivo font-900 color-white">REGISTER</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;