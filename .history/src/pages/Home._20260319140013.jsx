import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <div>
      <h1>All Courses</h1>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Home;