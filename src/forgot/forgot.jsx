import React from 'react';
import './forgot.css'; // Add the corresponding CSS file
import { IoMdArrowRoundBack } from "react-icons/io";

function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">

        <a href="/" className="back-arrow"><IoMdArrowRoundBack /></a>

        <h2 className='h2-forgot'>Forgot password?</h2>

        <p className='para-forgot'>Recover your account using your email.</p>

        <form className='form-forgot'>
          <input
            type="email"
            placeholder="Enter your email address"
            required
          />


          <button type="submit" className="recover-btn">Recover Password</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
