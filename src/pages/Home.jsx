import React from "react";
import { useNavigate } from "react-router-dom"; 

const Home = () => {
  const bgStyle = {
    backgroundImage: 'url("https://t4.ftcdn.net/jpg/03/23/78/37/360_F_323783730_OZGTKIyD3g4ul80xYKf3qSEJfmv3TO8h.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "60px 20px",
    backgroundColor: "#000",
    color: "#fff",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    padding: "40px",
    borderRadius: "10px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "3rem",
    color: "crimson",
    marginBottom: "20px",
  };

  const subHeadingStyle = {
    fontSize: "1.5rem",
    color: "lightcyan",
    marginBottom: "30px",
  };

  const buttonStyle = {
    backgroundColor: "darkcyan",
    color: "white",
    padding: "12px 30px",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s ease",
  };

  const sectionStyle = {
    backgroundColor: "#111",
    color: "#eee",
    padding: "40px 20px",
    textAlign: "center",
  };

  const sectionHeading = {
    fontSize: "2rem",
    color: "crimson",
    marginBottom: "20px",
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "30px",
  };

  const cardStyle = {
    backgroundColor: "#222",
    border: "1px solid #444",
    borderRadius: "10px",
    padding: "20px",
    width: "250px",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
    transition: "0.3s ease",
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <>
      {/* Hero Section */}
      <div style={bgStyle}>
        <div style={overlayStyle}>
          <h1 style={headingStyle}>Welcome to Dazzling Dance Studio</h1>
          <p style={subHeadingStyle}>
            Unlock your rhythm, grace, and passion with expert instructors and diverse dance programs.
          </p>
          <button style={buttonStyle} onClick={handleClick}>
            Explore Classes
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div style={sectionStyle}>
        <h2 style={sectionHeading}>About Us</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
          Dazzling Dance Studio is a premier dance school offering world-class training in a variety of dance forms. Whether you're a
          beginner or a pro, our instructors help bring out the dancer in you. Learn, perform, and shine on stage with us!
        </p>
      </div>

      {/* Our Features Section */}
      <div style={sectionStyle}>
        <h2 style={sectionHeading}>Our Features</h2>
        <div style={cardContainer}>
          <div style={cardStyle}>
            <h3 style={{ color: "darkcyan" }}>Expert Instructors</h3>
            <p>Train with professionals from classical to contemporary styles with personalized guidance.</p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ color: "crimson" }}>Student Dashboard</h3>
            <p>Track your classes, performance, schedule, and feedback in one student-friendly portal.</p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ color: "#00BFFF" }}>Live Events</h3>
            <p>Regular showcases and competitions to help you build confidence and perform on stage.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
