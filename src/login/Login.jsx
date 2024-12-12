import React, { useContext, useState } from 'react';
import './Logins.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import googleIcon from '../assets/logo/google.jpg';
import { FaApple } from "react-icons/fa";
import { backendUrl } from '../constants';
import { SessionContext } from '../contexts/session-context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const session = useContext(SessionContext);

  function handleSubmit(event) {
    console.log(event.target);
    event.preventDefault();

    const formData = new FormData(event.target);
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    }

    fetch(backendUrl("/api/users/login"), {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("session", JSON.stringify(data.data));
        alert("Login successful!");
        navigate('/bikes')
      } else {
        alert("Login failed!");
      }
    });
  }


  console.log("Session : ", session.session)
  if (!!session.session) navigate('/')

  return (

    <div className="login-container">


      <div className="login-box">
        <form className='form-login' method="post" onSubmit={handleSubmit}>
          <div className="input-group">
            <input className='input-name' type="text" name="email" placeholder="Email or phone number" required />

            <div className="password-field">
              <input className='input-name' type={passwordVisible ? "text" : "password"} name="password" placeholder="Password" required />
              <span
                className="toggle-password"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button className="sign-in-btn" type="submit">Sign in</button>

          <div className="alternative-sign-in">
            <p>Or sign in with</p>
            <div className="social-icons">
              <button className="google-btn"  >
                <img className='google-Icon' src={googleIcon} alt="Google" />
              </button>

              <button className="apple-btn"><FaApple /></button>
            </div>
          </div>

          <div className="sign-up">
            <p>Don't have an account? </p><a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
