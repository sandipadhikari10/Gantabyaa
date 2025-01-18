import React, { useContext, useEffect, useState } from 'react';
import './Logins.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { SessionContext } from '../contexts/session-context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { session, revalidateSession } = useContext(SessionContext);

  useEffect(() => {
    if (session) {
      if (session.role === "admin") {
        navigate('/admin')
      } else {
        navigate('/bikes')
      }
    }
  }, [session])

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    }

    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      if (response.ok) {
        revalidateSession()
      } else {
        alert("Login failed!");
      }
    });
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <form className='form-login' method="post" onSubmit={handleSubmit}>
          <div className="input-group">
            <input className='input-name' type="text" name="email" placeholder="Email or phone number" required defaultValue={"macpokhara2@gmail.com"} />

            <div className="password-field">
              <input className='input-name' type={passwordVisible ? "text" : "password"} name="password" placeholder="Password" required defaultValue={"000000000000"} />
              <span
                className="toggle-password"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <button className="sign-in-btn" type="submit">Sign in</button>



          <div className="sign-up">
            <p>Don't have an account? </p><a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
