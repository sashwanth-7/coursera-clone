import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>

      <Link to={`/course/${course.id}`}>
        <button>View Course</button>
      </Link>
    </div>
  );
}

export default CourseCard;