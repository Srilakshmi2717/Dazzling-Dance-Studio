import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{
      backgroundColor: "#111", 
      color: "white", 
      padding: "30px 0", 
      textAlign: "center", 
      borderTop: "2px solid #333"
    }}>
      {/* Contact Details Section */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ margin: "5px 0", fontSize: "16px" }}>Contact Us:</p>
        <p style={{ margin: "5px 0", fontSize: "16px" }}>
          Phone: <a href="tel:+91 1234567890" style={linkStyle}>+91 1234567890</a>
        </p>
        <p style={{ margin: "5px 0", fontSize: "16px" }}>
          Email: <a href="mailto:info@dazzlingdancestudio.com" style={linkStyle}>info@dazzlingdancestudio.com</a>
        </p>
      </div>

      {/* Social Media Links */}
      <div style={{ marginBottom: "20px" }}>
        <a href="https://facebook.com" style={iconStyle}>
          <FaFacebook size={30} />
        </a>
        <a href="https://twitter.com" style={iconStyle}>
          <FaTwitter size={30} />
        </a>
        <a href="https://instagram.com" style={iconStyle}>
          <FaInstagram size={30} />
        </a>
        <a href="https://linkedin.com" style={iconStyle}>
          <FaLinkedin size={30} />
        </a>
      </div>

      {/* Copyright Text */}
      <div>
        <p style={{ marginTop: "20px", fontSize: "14px", color: "#aaa" }}>
          © 2025 Dazzling Dance Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

// Common link style for footer
const linkStyle = {
  color: "crimson", 
  textDecoration: "none", 
  fontWeight: "bold", 
  transition: "color 0.3s",
};

const iconStyle = {
  color: "white", 
  margin: "0 10px", 
  transition: "color 0.3s", 
  fontSize: "30px", 
};

export default Footer;
