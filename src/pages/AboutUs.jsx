import React from "react";

const AboutUs = () => {
  const styles = {
    container: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "40px 20px",
      fontFamily: "Segoe UI, sans-serif",
      minHeight: "100vh",
    },
    header: {
      fontSize: "2.8rem",
      fontWeight: "bold",
      color: "crimson",
      marginBottom: "20px",
      textAlign: "center",
    },
    subHeader: {
      fontSize: "1.8rem",
      color: "darkcyan",
      marginBottom: "10px",
      textAlign: "center",
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      maxWidth: "900px",
      margin: "0 auto 20px auto",
      textAlign: "center",
    },
    highlight: {
      color: "crimson",
      fontWeight: "bold",
    },
    featureSection: {
      marginTop: "40px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    featureCard: {
      backgroundColor: "#111",
      color: "#fff",
      border: "1px solid darkcyan",
      borderRadius: "10px",
      padding: "20px",
      width: "280px",
      textAlign: "center",
      transition: "transform 0.3s ease",
    },
    featureTitle: {
      fontSize: "1.2rem",
      marginBottom: "10px",
      color: "crimson",
    },
    featureCardHover: {
      transform: "scale(1.05)",
    },
  };

  const features = [
    {
      title: "Expert Instructors",
      description: "Train under experienced dancers who specialize in classical, contemporary, and hip-hop styles.",
    },
    {
      title: "Flexible Schedules",
      description: "Join classes that fit your timing, whether you're a beginner or an advanced dancer.",
    },
    {
      title: "Online & Offline",
      description: "Choose between live online classes or in-person sessions at our studio.",
    },
    {
      title: "Certification Programs",
      description: "Get certified after completion of specific courses and levels.",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>About Us</div>
      <div style={styles.subHeader}>Dance with Passion. Learn with Purpose.</div>
      <p style={styles.paragraph}>
        Welcome to <span style={styles.highlight}>Dazzling Dance Studio</span> — your one-stop destination to explore the art of dance.
        We believe everyone has rhythm within them, and with the right guidance, they can shine on any stage.
      </p>
      <p style={styles.paragraph}>
        Our mission is to create a nurturing environment where students of all ages can learn, grow, and perform.
        Whether you’re preparing for competitions or just dancing for joy, we’re here for you.
      </p>

      <div style={styles.featureSection}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              ...styles.featureCard,
              ":hover": styles.featureCardHover,
            }}
          >
            <div style={styles.featureTitle}>{feature.title}</div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
