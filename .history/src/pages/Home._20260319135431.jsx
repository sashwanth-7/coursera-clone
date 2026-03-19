import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/course/1">Go to Course</Link>
    </div>
  );
}

export default Home;