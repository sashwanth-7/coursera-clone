import courses from "../data/courses";

function Dashboard() {
  return (
    <div className="container">
      <h1>Your Progress</h1>

      {courses.map(course => (
        <div key={course.id} className="progress-card">
          <h3>{course.title}</h3>
          <p>{course.progress}% completed</p>

          <progress value={course.progress} max="100"></progress>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;