import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => console.error("Failed to fetch classes:", err));

    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div style={{
      backgroundColor: "#121212",
      color: "#fff",
      minHeight: "100vh",
      padding: "30px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ color: "crimson" }}>Admin Dashboard</h2>
      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>
        {/* Left: Class Details */}
        <div style={{ flex: 1 }}>
          <h3 style={{ color: "darkcyan" }}>
            Total Classes: {classes.length}
          </h3>
          {classes.map((cls) => (
            <div
              key={cls.id}
              style={{
                backgroundColor: "#1e1e1e",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "10px",
                borderLeft: "5px solid darkcyan",
                boxShadow: "0 2px 6px rgba(0,0,0,0.5)"
              }}
            >
              <h4 style={{ margin: "0 0 5px 0", color: "crimson" }}>{cls.title}</h4>
              <p style={{ margin: "4px 0" }}><strong>Instructor:</strong> {cls.instructor}</p>
              <p style={{ margin: "4px 0" }}><strong>Timing:</strong> {cls.timing}</p>
              <p style={{ margin: "4px 0" }}><strong>Level:</strong> {cls.level}</p>
            </div>
          ))}
        </div>

        {/* Right: Student List */}
        <div style={{ flex: 1 }}>
        <h3 style={{ color: "darkcyan" }}>Registered Students</h3>
        {users.filter((user) => user.role === "student").length === 0 ? (
          <p>No student users found.</p>
        ) : (
          users
            .filter((user) => user.role === "student")
            .map((user) => (
              <div
                key={user.id}
                style={{
                  backgroundColor: "#1e1e1e",
                  padding: "15px",
                  marginBottom: "15px",
                  borderRadius: "10px",
                  borderLeft: "5px solid crimson",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.5)"
                }}
              >
                <h4 style={{ marginBottom: "5px", color: "#fff" }}>{user.email}</h4>
                <p style={{ margin: "4px 0" }}>
                  <strong>Joined Classes:</strong>{" "}
                  {user.joinedClasses?.length > 0 ? user.joinedClasses.join(", ") : "None"}
                </p>
              </div>
            ))
        )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
