import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>All Courses</h1>

      <div className="course-container">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}

export default Home;