import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSignup = (e) => {
    e.preventDefault();
    // Dummy signup for demo (replace with real signup logic)
    const newUser = { email, password, role };
    sessionStorage.setItem("user", JSON.stringify(newUser));
    navigate(`/${role}`);
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
        <h2 style={{ textAlign: "center", color: "crimson", marginBottom: "30px" }}>Signup</h2>
        <form onSubmit={handleSignup}>
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

          <label style={{ display: "block", marginBottom: "20px", color: "#ccc" }}>
            Role:
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#222",
                color: "#fff",
                borderRadius: "6px",
                border: "none",
              }}
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
              <option value="instructor">Instructor</option>
            </select>
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
            Sign Up
          </button>
        </form>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#aaa" }}>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "crimson", cursor: "pointer", textDecoration: "underline" }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
