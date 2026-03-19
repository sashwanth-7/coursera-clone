import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((c) => c.id === id);

  if (!course) return <h1>Course not found</h1>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <Link to={`/learn/${course.id}`}>
        <button>Start Learning</button>
      </Link>
    </div>
  );
}

export default CourseDetails;