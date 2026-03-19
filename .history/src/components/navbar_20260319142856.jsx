import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#0056d2",
      color: "white"
    }}>
      <h2>CourseHub</h2>

      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
        <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
      </div>
    </div>
  );
}

export default Navbar;