import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AvailableClasses() {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [user, setUser] = useState(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (!userData) return null;
    return {
      ...userData,
      id: userData.id?.toString() || "",
      joinedClasses: userData.joinedClasses || [],
    };
  });

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => console.error("Failed to fetch classes:", err));
  }, []);

  useEffect(() => {
    if (!user) {
      alert("Please log in first.");
      navigate("/login");
    }
  }, [user, navigate]);

  const handleJoin = (classId) => {
    if (!user || !user.id) {
      alert("User not found. Please log in.");
      return;
    }

    if (user.joinedClasses.includes(classId)) {
      alert("Already joined this class.");
      return;
    }

    const updatedClasses = [...user.joinedClasses, classId];

    fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ joinedClasses: updatedClasses }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .then(() => {
        const updatedUser = { ...user, joinedClasses: updatedClasses };
        setUser(updatedUser);
        sessionStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Class joined successfully!");
      })
      .catch((err) => {
        console.error("Join failed:", err);
        alert("Failed to join class.");
      });
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#1e1e1e", minHeight: "100vh" }}>
      <h2 style={{ color: "crimson", textAlign: "center", marginBottom: "30px" }}>
        Available Classes
      </h2>
      {classes.length === 0 ? (
        <p style={{ color: "white", textAlign: "center" }}>Loading classes...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              style={{
                backgroundColor: "#2c2c2c",
                color: "white",
                border: "1px solid darkcyan",
                borderRadius: "12px",
                padding: "20px",
                width: "300px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              }}
            >
              <h3 style={{ color: "crimson" }}>{classItem.title}</h3>
              <p>{classItem.description}</p>
              <p><strong>Instructor:</strong> {classItem.instructor}</p>
              <p><strong>Timing:</strong> {classItem.timing}</p>
              <p><strong>Level:</strong> {classItem.level}</p>
              <button
                onClick={() => handleJoin(classItem.id)}
                disabled={user?.joinedClasses?.includes(classItem.id)}
                style={{
                  marginTop: "10px",
                  padding: "10px 16px",
                  backgroundColor: user?.joinedClasses?.includes(classItem.id) ? "#555" : "darkcyan",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: user?.joinedClasses?.includes(classItem.id) ? "not-allowed" : "pointer",
                  width: "100%",
                  fontWeight: "bold"
                }}
              >
                {user?.joinedClasses?.includes(classItem.id) ? "Already Joined" : "Join"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AvailableClasses;
