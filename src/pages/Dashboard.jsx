import { Link } from "react-router-dom";
import courses from "../data/courses";

function Dashboard() {
  const enrolledCourses = courses.filter(c => c.progress > 0);
  const totalProgress = enrolledCourses.length > 0
    ? Math.round(enrolledCourses.reduce((sum, c) => sum + c.progress, 0) / enrolledCourses.length)
    : 0;

  return (
    <div className="container">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>My Dashboard</h1>
          <p>Track your learning progress</p>
        </div>
        <Link to="/">
          <button className="btn" style={{ width: "auto", padding: "10px 25px" }}>
            + Browse Courses
          </button>
        </Link>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-number">{enrolledCourses.length}</div>
          <div className="stat-label">Enrolled Courses</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-number">{totalProgress}%</div>
          <div className="stat-label">Average Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-number">
            {enrolledCourses.filter(c => c.progress === 100).length}
          </div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏱</div>
          <div className="stat-number">{enrolledCourses.length * 4}h</div>
          <div className="stat-label">Hours Learned</div>
        </div>
      </div>

      {/* Course Progress */}
      <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>My Courses</h2>

      {enrolledCourses.length === 0 ? (
        <div className="empty-state">
          <p>📭 You haven't enrolled in any courses yet.</p>
          <Link to="/">
            <button className="btn" style={{ width: "auto", padding: "10px 25px", marginTop: "15px" }}>
              Browse Courses
            </button>
          </Link>
        </div>
      ) : (
        enrolledCourses.map(course => (
          <div key={course.id} className="progress-card">
            <div className="progress-card-left">
              <img
                src={course.image}
                alt={course.title}
                className="progress-card-img"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop";
                }}
              />
            </div>
            <div className="progress-card-right">
              <div className="progress-card-top">
                <h3>{course.title}</h3>
                <span className="progress-percent">{course.progress}%</span>
              </div>
              <p style={{ color: "#666", fontSize: "14px", margin: "4px 0 10px" }}>
                {course.instructor} · {course.duration}
              </p>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <div style={{ marginTop: "12px" }}>
                <Link to={`/learn/${course.id}`}>
                  <button className="btn" style={{ width: "auto", padding: "8px 20px" }}>
                    {course.progress === 100 ? "Review" : "Continue"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}

    </div>
  );
}

export default Dashboard;