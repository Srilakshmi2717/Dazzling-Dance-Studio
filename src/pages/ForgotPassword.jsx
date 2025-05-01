import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSearch = async () => {
    const res = await fetch(`http://localhost:5000/users?email=${email}`);
    const data = await res.json();
    if (data.length > 0) {
      setPassword(data[0].password);
    } else {
      setPassword("Email not found");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Enter your email"
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <br /><br />
      <button onClick={handleSearch}>Retrieve Password</button>
      <br /><br />
      {password && <p>Your password: <b>{password}</b></p>}
    </div>
  );
}

export default ForgotPassword;
