import React, { useEffect, useState } from "react";

function StudentDashboard() {
  const [user] = useState(JSON.parse(sessionStorage.getItem("user")) || {});
  const [joinedClasses, setJoinedClasses] = useState([]);

  useEffect(() => {
    if (user?.joinedClasses?.length > 0) {
      fetch("http://localhost:5000/classes")
        .then((res) => res.json())
        .then((allClasses) => {
          const filtered = allClasses.filter((c) => user.joinedClasses.includes(c.id));
          setJoinedClasses(filtered);
        });
    }
  }, [user]);

  return (
    <div style={{ padding: "30px", backgroundColor: "#1e1e1e", minHeight: "100vh" }}>
      <h2 style={{ color: "crimson", marginBottom: "20px" }}>
        Welcome, {user?.email || "Guest"}
      </h2>
      <h3 style={{ color: "darkcyan", marginBottom: "20px" }}>Your Joined Classes</h3>

      {joinedClasses.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {joinedClasses.map((c) => (
            <div
              key={c.id}
              style={{
                backgroundColor: "#2c2c2c",
                color: "white",
                border: "1px solid crimson",
                borderRadius: "12px",
                padding: "20px",
                width: "300px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
              }}
            >
              <h4 style={{ color: "crimson" }}>{c.title}</h4>
              <p>{c.description}</p>
              <p><strong>Timing:</strong> {c.timing}</p>
              <p><strong>Level:</strong> {c.level}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: "white" }}>You haven't joined any classes yet.</p>
      )}
    </div>
  );
}

export default StudentDashboard;
