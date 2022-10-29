import React from "react";
import { lazy, Suspense } from "react";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import About from "./page/About";
import Skill from "./page/Skill";
import Experience from "./page/Experience";
import Project from "./page/Project";
import Education from "./page/Education";
import Hobby from "./page/Hobby";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import MenuProvider from "./context/MenuContext";
import PageNotFound from "./page/PageNotFound";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/skill",
      element: <Skill />,
    },
    {
      path: "/experience",
      element: <Experience />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/education",
      element: <Education />,
    },
    {
      path: "/hobby",
      element: <Hobby />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <>
      <MenuProvider>
        <Sidebar />
        <div className="bg">
          <Resume />
          <main>
            <AnimatePresence mode="wait">
              {React.cloneElement(element, { key: location.pathname })}
            </AnimatePresence>
          </main>
          <Navbar />
        </div>
      </MenuProvider>
    </>
  );
}

export default App;
