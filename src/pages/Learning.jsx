import { useParams } from "react-router-dom";
import courses from "../data/courses";

function Learning() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#eef2ff",
        padding: "20px"
      }}>
        <h3>Lessons</h3>
        <ul>
          <li>Intro</li>
          <li>Basics</li>
          <li>Advanced</li>
        </ul>
      </div>

      {/* Video */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>{course.title}</h2>

        <iframe
          width="100%"
          height="400"
          src={course.video}
          title="video"
        ></iframe>
      </div>
    </div>
  );
}

export default Learning;