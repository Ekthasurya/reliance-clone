import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/LoginPage.css"

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://reliance-clone-3.onrender.com/user/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsAuthenticated(true);
        navigate("/");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
    <div className="parent-login">
        <div className="img-login">
            <img src="https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg" alt="" />
        </div>
    <div className="auth-page">
      <h2 className="Login-head">Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="from-input">
        <div className="input-email">
          <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-password">
          <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        <a href="#/register"><p>You Can Register Here</p></a>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default LoginPage;
