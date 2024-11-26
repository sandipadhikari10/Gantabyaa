import React, { useState } from 'react';
import './Logins.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import googleIcon from '../assets/logo/google.jpg';
import { FaApple } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
   
    <div className="login-container">
        
        
      <div className="login-box">
        <form className='form-login'>
          <div className="input-group">
            <input className='input-name' type="text" placeholder="Email or phone number" required />
          
            <div className="password-field">
              <input className='input-name' type={passwordVisible ? "text" : "password"} placeholder="Password" required />
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
             
              <button className="apple-btn"><FaApple/></button>
              
              
            </div>
          </div>

          <div className="sign-up">
            <p>Don't have an account? </p><a href="#">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
