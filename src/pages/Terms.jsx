import React from "react";

const Terms = () => {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "auto", background: "#111", padding: "40px", borderRadius: "12px", boxShadow: "0 0 20px darkcyan" }}>
        <h1 style={{ color: "crimson", textAlign: "center", marginBottom: "30px" }}>Terms & Conditions</h1>

        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#ccc", marginBottom: "30px" }}>
          These Terms & Conditions govern your use of our platform. By using our site, you agree to abide by these terms.
        </p>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "darkcyan" }}>1. User Accounts</h2>
          <ul style={{ color: "#ddd", lineHeight: "1.6" }}>
            <li>Users must provide accurate information during registration.</li>
            <li>Accounts are personal and non-transferable.</li>
            <li>You are responsible for maintaining the confidentiality of your credentials.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "darkcyan" }}>2. Course Access & Content</h2>
          <ul style={{ color: "#ddd", lineHeight: "1.6" }}>
            <li>Enrolled users may access courses based on subscription plans.</li>
            <li>All content is owned by our platform and protected by copyright laws.</li>
            <li>Unauthorized sharing or downloading of material is strictly prohibited.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "darkcyan" }}>3. Code of Conduct</h2>
          <ul style={{ color: "#ddd", lineHeight: "1.6" }}>
            <li>Be respectful to instructors and fellow learners.</li>
            <li>No abusive language, spamming, or inappropriate behavior is allowed.</li>
            <li>We reserve the right to ban accounts violating the code of conduct.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "darkcyan" }}>4. Refunds & Cancellations</h2>
          <p style={{ color: "#ccc" }}>
            Refunds are processed based on our refund policy. Cancellations must be initiated from your account settings or by contacting support.
          </p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "darkcyan" }}>5. Changes to Terms</h2>
          <p style={{ color: "#ccc" }}>
            We may update these terms occasionally. Users will be notified of significant changes via email or dashboard alerts.
          </p>
        </section>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontStyle: "italic", color: "#aaa" }}>
            Last updated: April 30, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
