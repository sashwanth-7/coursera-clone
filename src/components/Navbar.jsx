import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="navbar-logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">CourseHub</span>
        </div>
      </Link>

      <div className="navbar-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "nav-active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className={`nav-link ${location.pathname === "/dashboard" ? "nav-active" : ""}`}
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Navbar;