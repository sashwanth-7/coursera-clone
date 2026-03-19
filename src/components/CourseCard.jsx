import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="card">
      <img src={course.image} alt="" />

      <div className="card-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <Link to={`/course/${course.id}`}>
          <button className="btn">View Course</button>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;