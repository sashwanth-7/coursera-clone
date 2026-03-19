function CourseCard({ course }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      background: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link to={`/course/${course.id}`}>
        <button>View Course</button>
      </Link>
    </div>
  );
}