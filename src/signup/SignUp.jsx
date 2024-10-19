import React, { useState } from "react";
import "./SignUp.css"; // Include the corresponding CSS file
import { FaEyeSlash, FaEye } from "react-icons/fa";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign In</h2>
        <form className="form-signup">
        <div className="input-group">
          <input className="input-name" type="text" placeholder="Enter full name" required />
          <input className="input-name" type="email" placeholder="Email" required />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
            <input className="agree-input" type="checkbox" required />&nbsp;
            <label htmlFor="agree">I Agree with privacy and policy</label>
          </div>
          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>
        <p className="existing-account">
          Already have an account?  </p>
          <a className="exist-acc" href="/login">Sign in</a>
       
      </div>
    </div>
  );
}

export default SignUp;
