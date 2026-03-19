import { courses } from "../data/courses";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>Progress: {course.progress}%</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;