import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import Learning from "./pages/Learning";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/learn/:id" element={<Learning />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;