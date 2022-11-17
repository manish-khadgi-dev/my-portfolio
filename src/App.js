import "./App.css";

import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Layout } from "./components/Layout";
import { motion } from "framer-motion";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

function App() {
  return (
    <div class="wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
              </Layout>
            }
          />
          <Route
            path="/skills"
            element={
              <Layout>
                <Skills />
              </Layout>
            }
          />
          <Route
            path="/projects"
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />
          <Route
            path="/about-me"
            element={
              <Layout>
                <AboutMe />
              </Layout>
            }
          />
          <Route
            path="/contactme"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>

      <motion.a href="#navbar" id="arrow" whileHover={{ scale: 1.1 }}>
        <i class="fa-solid fa-arrow-up"></i>
      </motion.a>
    </div>
  );
}

export default App;
