import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <div className="container">
      <h1>Explore Courses</h1>

      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Home;