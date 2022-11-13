import "./App.css";

import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Layout } from "./components/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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

      <a href="#navbar" id="arrow">
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default App;
