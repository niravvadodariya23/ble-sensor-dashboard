import React, { useState } from "react";
import "./LogInPage.css"; // Assuming you style the form here

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password); 

    // Add login logic here (e.g., API call or authentication)
  };

  return (
    <div className="page-wrapper">
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <span className="title">Log in</span>
          <span className="subtitle">
            Access your account using your email.
          </span>

          <div className="form-container">
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Log in</button>
        </form>

        <div className="form-section">
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
