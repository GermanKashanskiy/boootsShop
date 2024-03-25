import React, { useContext, useEffect, useState } from "react";
import './style/style.css';
import '../../styles/style.css';
import { Link } from "react-router-dom";
import { AuthContext } from "../../routes/Routes";
import { AuthorizeInAccount } from "../../routes/AuthAccount";
import { GetAccountWithUsernameNEmail } from "../../api/account/UseAccount";

interface FormData {
  email: string,
  password: string
}

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loginValidation = () => {
    if (GetAccountWithUsernameNEmail(formData.email, formData.password).length > 0) {
      Authorize()
      setIsAuthenticated(true)
    }
    else {
      setIsAuthenticated(false)
    }
  }

  const Authorize = () => {
    AuthorizeInAccount(GetAccountWithUsernameNEmail(formData.email, formData.password)[0])
  }

  return (
    <div className="d-flex justify-center mt-5">
      <div id="login-container" className="d-flex">
        <form action="#" id="login-form" className="d-flex dir-column section-padding">
          <label htmlFor="chk" aria-hidden="true" className="font-archivo font-900 mb-5">LOGIN</label>
          <input type="email" name="email" onChange={handleChange} placeholder="EMAIL" className="mt-1" required />
          <input type="password" name="password" onChange={handleChange} placeholder="PASSWORD" className="mt-1" required />
          <input type="submit" value="SIGN IN" onClick={loginValidation} className="font-archivo font-900 mt-2" />
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