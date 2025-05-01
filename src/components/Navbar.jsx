import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  // Handle Logout functionality
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={{
      backgroundColor: "#111", 
      padding: "15px 30px", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    }}>
      {/* Left Side: Logo and Navigation Links */}
      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Link to="/" style={{
          textDecoration: "none", 
          color: "crimson", 
          fontSize: "18px", 
          fontWeight: "bold"
        }}>
          Dazzling Dance Studio
        </Link>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/about" style={navLinkStyle}>About</Link>
          <Link to="/faqs" style={navLinkStyle}>FAQs</Link>
          <Link to="/privacy-policy" style={navLinkStyle}>Privacy & Conditions</Link>
          <Link to="/terms" style={navLinkStyle}>Terms & Policy</Link>

          {/* Role-based Navigation Links */}
          {user?.role === "admin" && (
            <Link to="/admin" style={navLinkStyle}>Admin Dashboard</Link>
          )}
          {user?.role === "student" && (
            <>
              <Link to="/available-classes" style={navLinkStyle}>Available Classes</Link> 
              <Link to="/student" style={navLinkStyle}>Student Dashboard</Link>
            </>
          )}
          {user?.role === "instructor" && (
            <Link to="/instructor" style={navLinkStyle}>Instructor Dashboard</Link>
          )}
        </div>
      </div>

      {/* Right Side: Login/Signup or Logout */}
      <div>
        {!user ? (
          <>
            <Link to="/login" style={authLinkStyle}>Login</Link>
            <Link to="/signup" style={authLinkStyle}>Signup</Link>
          </>
        ) : (
          <button 
            onClick={handleLogout} 
            style={{
              padding: "8px 20px", 
              backgroundColor: "crimson", 
              color: "white", 
              border: "none", 
              borderRadius: "5px", 
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

// Common link style for navigation
const navLinkStyle = {
  textDecoration: "none", 
  color: "white", 
  fontSize: "16px", 
  fontWeight: "bold",
  transition: "color 0.3s",
};

const authLinkStyle = {
  textDecoration: "none", 
  color: "crimson", 
  fontSize: "16px", 
  fontWeight: "bold",
  marginRight: "15px",
  transition: "color 0.3s",
};

export default Navbar;
