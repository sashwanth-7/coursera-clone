import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  // ✅ Fix: handle course not found
  if (!course) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2>Course not found 😕</h2>
        <Link to="/">
          <button className="btn" style={{ width: "auto", padding: "10px 30px", marginTop: "20px" }}>
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  const levelColor = {
    "Beginner": "#22c55e",
    "Intermediate": "#f59e0b",
    "Advanced": "#ef4444"
  };

  return (
    <div className="container">

      {/* Back link */}
      <Link to="/" className="back-link">← Back to Courses</Link>

      {/* Course Header */}
      <div className="details-header">
        <div className="details-info">
          <div className="details-badges">
            <span className="badge-category">{course.category}</span>
            <span
              className="badge-level"
              style={{ background: levelColor[course.level] }}
            >
              {course.level}
            </span>
          </div>

          <h1 className="details-title">{course.title}</h1>
          <p className="details-description">{course.description}</p>

          <div className="details-meta">
            <span>👨‍🏫 {course.instructor}</span>
            <span>⏱ {course.duration}</span>
            <span>⭐ {course.rating}</span>
            <span>👥 {course.students.toLocaleString()} students</span>
          </div>

          <Link to={`/learn/${course.id}`}>
            <button className="btn btn-large">
              🚀 Start Learning
            </button>
          </Link>
        </div>

        <div className="details-image">
          <img
            src={course.image}
            alt={course.title}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=350&fit=crop";
            }}
          />
        </div>
      </div>

      {/* What you learn */}
      <div className="details-section">
        <h2>What you will learn</h2>
        <div className="learn-grid">
          {[
            "Core concepts and fundamentals",
            "Real-world project experience",
            "Best practices and clean code",
            "Industry standard tools",
            "Problem solving techniques",
            "Career ready skills"
          ].map((item, i) => (
            <div key={i} className="learn-item">
              <span className="learn-check">✅</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Includes */}
      <div className="details-section">
        <h2>This course includes</h2>
        <div className="includes-grid">
          <div className="include-item">🎥 {course.duration} of video content</div>
          <div className="include-item">📱 Access on mobile & desktop</div>
          <div className="include-item">🏆 Certificate of completion</div>
          <div className="include-item">♾️ Full lifetime access</div>
        </div>
      </div>

    </div>
  );
}

export default CourseDetails;