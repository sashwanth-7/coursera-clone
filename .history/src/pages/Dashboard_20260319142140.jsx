function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Progress</h1>

      <div className="card">
        <h3>React Basics</h3>
        <p>Progress: 60%</p>
        <progress value="60" max="100"></progress>
      </div>

      <div className="card">
        <h3>JavaScript Mastery</h3>
        <p>Progress: 30%</p>
        <progress value="30" max="100"></progress>
      </div>
    </div>
  );
}

export default Dashboard;