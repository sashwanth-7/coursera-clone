import { Link } from "react-router-dom";

function CourseCard({ course }) {
  const stars = "★".repeat(Math.floor(course.rating)) + 
                "☆".repeat(5 - Math.floor(course.rating));

  const levelColor = {
    "Beginner":     "#22c55e",
    "Intermediate": "#f59e0b",
    "Advanced":     "#ef4444"
  };

  return (
    <div className="card">

      {/* Image */}
      <div className="card-image-wrapper">
        <img
          src={course.image}
          alt={course.title}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop";
          }}
        />
        <span
          className="card-level-badge"
          style={{ background: levelColor[course.level] }}
        >
          {course.level}
        </span>
        <span className="card-category-badge">{course.category}</span>
      </div>

      {/* Content */}
      <div className="card-content">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-description">{course.description}</p>

        <p className="card-instructor">👨‍🏫 {course.instructor}</p>

        {/* Rating */}
        <div className="card-rating">
          <span className="stars">{stars}</span>
          <span className="rating-number">{course.rating}</span>
          <span className="students">({course.students.toLocaleString()} students)</span>
        </div>

        {/* Duration */}
        <div className="card-meta">
          <span>⏱ {course.duration}</span>
        </div>

        {/* Progress bar (only if enrolled) */}
        {course.progress > 0 && (
          <div className="card-progress">
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span className="progress-text">{course.progress}% complete</span>
          </div>
        )}

        <Link to={`/course/${course.id}`}>
          <button className="btn">
            {course.progress > 0 ? "Continue Learning" : "View Course"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;