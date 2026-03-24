import { useState } from "react";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(courses.map(c => c.category))];

  // Filter courses
  const filtered = activeCategory === "All"
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <div>

      {/* ── Hero Section ─────────────────────── */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Learn Without <span className="hero-highlight">Limits</span>
          </h1>
          <p className="hero-subtitle">
            Explore world-class courses in programming, design, and more.
            Start learning today and build the skills you need.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>8+</strong>
              <span>Courses</span>
            </div>
            <div className="hero-stat">
              <strong>100K+</strong>
              <span>Students</span>
            </div>
            <div className="hero-stat">
              <strong>4.8★</strong>
              <span>Avg Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Courses Section ──────────────────── */}
      <div className="container">

        <div className="section-header">
          <h2>Explore Courses</h2>
          <p>{filtered.length} courses available</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="course-grid">
          {filtered.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;