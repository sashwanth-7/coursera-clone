import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      padding: "10px 20px",
      background: "#2563eb",
      color: "white",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2>Lumina Academy</h2>
      <div>
        <Link style={{ marginRight: 15, color: "white" }} to="/">Home</Link>
        <Link style={{ marginRight: 15, color: "white" }} to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;