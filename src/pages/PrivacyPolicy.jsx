import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ backgroundColor: "#000", color: "white", minHeight: "100vh", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "auto", background: "#111", padding: "40px", borderRadius: "12px", boxShadow: "0 0 20px crimson" }}>
        <h1 style={{ color: "crimson", textAlign: "center", marginBottom: "30px" }}>Privacy Policy</h1>

        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "20px", color: "#ccc" }}>
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our platform.
        </p>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "darkcyan" }}>1. Information We Collect</h2>
          <ul style={{ color: "#ddd", lineHeight: "1.6" }}>
            <li>Name, email, and contact details when you sign up.</li>
            <li>Device and browser information for performance tracking.</li>
            <li>Usage patterns to improve user experience.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "darkcyan" }}>2. How We Use Your Information</h2>
          <ul style={{ color: "#ddd", lineHeight: "1.6" }}>
            <li>To create and manage your account.</li>
            <li>To personalize your dashboard and content recommendations.</li>
            <li>To send important updates and promotional offers.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "darkcyan" }}>3. Data Sharing & Security</h2>
          <p style={{ color: "#ccc" }}>
            We do not sell or rent your data. Your data is encrypted and stored securely. We may share data with service providers strictly for platform functionality.
          </p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "darkcyan" }}>4. Cookies</h2>
          <p style={{ color: "#ccc" }}>
            We use cookies to enhance user experience. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "darkcyan" }}>5. Your Rights</h2>
          <p style={{ color: "#ccc" }}>
            You have the right to access, modify, or delete your personal data anytime. Contact our support for assistance.
          </p>
        </section>

        <section style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontStyle: "italic", color: "#aaa" }}>
            Last updated: April 30, 2025
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
