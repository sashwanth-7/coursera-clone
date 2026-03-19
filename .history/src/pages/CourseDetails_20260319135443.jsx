import { useParams, Link } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Course Details - {id}</h1>
      <Link to={`/learn/${id}`}>Start Learning</Link>
    </div>
  );
}

export default CourseDetails;