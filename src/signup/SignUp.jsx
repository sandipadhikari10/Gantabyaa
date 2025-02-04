import React, { useState } from "react";
import "./SignUp.css"; // Include the corresponding CSS file
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    console.log(event.target);
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      navigate("/login");
      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert("Registration failed!");
      }
    });
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign In</h2>
        <form className="form-signup" method="post" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="input-name"
              type="text"
              placeholder="Enter full name"
              name="name"
              defaultValue={"mount annapurna"}
              required
            />
            <input
              className="input-name"
              type="email"
              placeholder="Email"
              name="email"
              defaultValue={"macpokhara2@gmail.com"}
              required
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                defaultValue={"000000000000"}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                defaultValue={"000000000000"}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <div className="checkbox-field">

            <input type="checkbox" id="option1" /><br />
            <label htmlFor="option1">I agree with privacy and policy</label>
          </div>

          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>
        <p className="existing-account">Already have an account? </p>
        <a className="exist-acc" href="/login">
          Sign in
        </a>
      </div>
    </div>
  );
}

export default SignUp;
