import "./App.css";

import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Layout } from "./components/Layout";
import { TopNav } from "./components/TopNav";

function App() {
  return (
    <Layout>
      <div class="wrapper">
        {/* <!-- navbar --> */}
        <TopNav />
        {/* <!-- hero section --> */}
        <Hero />

        {/* <!-- Skills --> */}
        <Skills />

        {/* <!-- Projects -->  */}
        <Projects />

        {/* <!-- aboutme --> */}
        <AboutMe />

        {/* <!-- contact me  --> */}
        <Contact />

        {/* <!-- Footer --> */}

        <a href="#navbar" id="arrow">
          <i class="fa-solid fa-arrow-up"></i>
        </a>
      </div>

      {/* Footer */}
    </Layout>
  );
}

export default App;
