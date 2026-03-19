import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  return (
    <div className="container">
      <h1>{course.title}</h1>
      <img src={course.image} style={{ width: "100%", borderRadius: "10px" }} />

      <p>{course.description}</p>

      <Link to={`/learn/${course.id}`}>
        <button className="btn">Start Learning</button>
      </Link>
    </div>
  );
}

export default CourseDetails;