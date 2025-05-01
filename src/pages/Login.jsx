import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5000/users");
      const users = await res.json();
  
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );
  
      if (!foundUser) {
        alert("Invalid email or password");
        return;
      }
  
      sessionStorage.setItem("user", JSON.stringify(foundUser));
      navigate(`/${foundUser.role}`);
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login.");
    }
  };  

  return (
    <div style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
    }}>
      <div style={{
        backgroundColor: "#111",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 0 20px darkcyan",
        width: "100%",
        maxWidth: "400px",
      }}>
        <h2 style={{ textAlign: "center", color: "crimson", marginBottom: "30px" }}>Login</h2>
        <form onSubmit={handleLogin}>
          <label style={{ display: "block", marginBottom: "10px", color: "#ccc" }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                marginBottom: "20px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#222",
                color: "#fff",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: "10px", color: "#ccc" }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                marginBottom: "20px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#222",
                color: "#fff",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "darkcyan",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#aaa" }}>
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{ color: "crimson", cursor: "pointer", textDecoration: "underline" }}
            >
              Sign up
            </span>
          </p>
          <p style={{ color: "#aaa", marginTop: "10px" }}>
            <span
              onClick={() => navigate("/forgot-password")}
              style={{ color: "darkcyan", cursor: "pointer", textDecoration: "underline" }}
            >
              Forgot Password?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
