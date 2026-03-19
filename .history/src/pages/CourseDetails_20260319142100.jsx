import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <h2>Course not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <h3>What you'll learn:</h3>
      <ul>
        <li>Basics</li>
        <li>Advanced concepts</li>
        <li>Real projects</li>
      </ul>

      <Link to={`/learn/${course.id}`}>
        <button className="btn">Start Learning</button>
      </Link>
    </div>
  );
}

export default CourseDetails;