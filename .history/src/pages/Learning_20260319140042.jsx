import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function Learning() {
  const { id } = useParams();

  const course = courses.find((c) => c.id === id);

  if (!course) return <h1>No course</h1>;

  return (
    <div>
      <h1>{course.title}</h1>

      <iframe
        width="600"
        height="350"
        src={course.video}
        title="video"
      ></iframe>

      <p>{course.description}</p>
    </div>
  );
}

export default Learning;