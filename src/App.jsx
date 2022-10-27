import { lazy, Suspense } from "react";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";

const About = lazy(() => import("./page/About"));
const Skill = lazy(() => import("./page/Skill"));
const Experience = lazy(() => import("./page/Experience"));
const Project = lazy(() => import("./page/Project"));
const Education = lazy(() => import("./page/Education"));
const Hobby = lazy(() => import("./page/Hobby"));

function App() {
  return (
    <div className="bg">
      <Resume />
      <main>
        <Suspense fallback={<h1 className="text-white">Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Project />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hobby" element={<Hobby />} />
          </Routes>
        </Suspense>
      </main>
      <Navbar />
    </div>
  );
}

export default App;
