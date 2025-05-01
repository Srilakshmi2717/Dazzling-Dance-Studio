import React, { useEffect, useState } from "react";

function InstructorDashboard() {
  const [instructor] = useState(JSON.parse(sessionStorage.getItem("user")) || {});
  const [myClasses, setMyClasses] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    timing: "",
    level: "",
  });

  // Fetch instructor's classes
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((c) => c.instructor === instructor.email);
        setMyClasses(filtered);
      });
  }, [instructor.email]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddClass = () => {
    if (!formData.title || !formData.description || !formData.timing || !formData.level) {
      alert("Please fill in all fields.");
      return;
    }

    const newClass = {
      ...formData,
      instructor: instructor.email,
    };

    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClass),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add class");
        return res.json();
      })
      .then((data) => {
        setMyClasses((prev) => [...prev, data]);
        setFormData({ title: "", description: "", timing: "", level: "" });
        alert("Class added successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add class.");
      });
  };

  return (
    <div style={{
      display: "flex",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#121212",
      color: "#fff",
      minHeight: "100vh"
    }}>
      {/* Left Side - Classes List */}
      <div style={{ flex: 1, marginRight: "30px" }}>
        <h2 style={{ color: "crimson" }}>Your Classes</h2>
        {myClasses.length === 0 ? (
          <p style={{ color: "#ccc" }}>No classes created yet.</p>
        ) : (
          myClasses.map((c) => (
            <div key={c.id} style={{
              backgroundColor: "#1e1e1e",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "15px",
              border: "1px solid crimson"
            }}>
              <h3 style={{ color: "darkcyan" }}>{c.title}</h3>
              <p>{c.description}</p>
              <p><strong>Timing:</strong> {c.timing}</p>
              <p><strong>Level:</strong> {c.level}</p>
            </div>
          ))
        )}
      </div>

      {/* Right Side - Add New Class */}
      <div style={{
      width: "45%",
      alignSelf: "flex-start",
      backgroundColor: "#1e1e1e",
      padding: "20px",
      borderRadius: "10px",
      border: "1px solid darkcyan"
      }}>

        <h2 style={{ color: "crimson" }}>Add New Class</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            name="title"
            placeholder="Class Title"
            value={formData.title}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            style={inputStyle}
          />
          <input
            type="text"
            name="timing"
            placeholder="Timing"
            value={formData.timing}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="level"
            placeholder="Level (e.g., Beginner)"
            value={formData.level}
            onChange={handleChange}
            style={inputStyle}
          />
          <button
            onClick={handleAddClass}
            style={{
              padding: "10px",
              backgroundColor: "darkcyan",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Add Class
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #555",
  backgroundColor: "#2c2c2c",
  color: "#fff",
};

export default InstructorDashboard;
