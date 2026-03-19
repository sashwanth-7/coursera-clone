import { useParams } from "react-router-dom";

function Learning() {
  const { id } = useParams();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#f0f0f0",
        padding: "10px"
      }}>
        <h3>Lessons</h3>
        <ul>
          <li>Intro</li>
          <li>Basics</li>
          <li>Advanced</li>
        </ul>
      </div>

      {/* Video Section */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Course {id}</h2>

        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/dGcsHMXbSOA"
          title="video"
        ></iframe>

        <p>Lesson content will appear here...</p>
      </div>
    </div>
  );
}

export default Learning;