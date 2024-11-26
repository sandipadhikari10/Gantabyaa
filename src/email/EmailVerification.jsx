import React, { useState } from 'react';
import './EmailVerification.css'; // Add the corresponding CSS file
import { IoMdArrowRoundBack } from "react-icons/io";

function EmailVerification() {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) 
      return
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="email-verification-container">
      <div className="email-verification-box">
        {/* Back Arrow */}
        <a href="/" className="back-arrow"><IoMdArrowRoundBack /></a>

        {/* Title */}
        <h2>Check your e-mail</h2>

        {/* Subtitle */}
        <p>Enter the 6 digits code sent to your registered email</p>

        {/* Code Inputs */}
        <div className="code-inputs">
          {code.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={e => e.target.select()}
            />
          ))}
        </div>

        {/* Continue Button */}
        <button type="submit" className="continue-btn">Continue</button>
      </div>
    </div>
  );
}

export default EmailVerification;
