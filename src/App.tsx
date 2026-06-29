import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <Navbar />

      {/* Spacer for fixed nav */}
      <div style={{ height: "var(--nav-height)" }} />

      {/* Placeholder sections for scroll testing */}
      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />

        <section id="contact" className="min-h-[60vh] flex items-center justify-center px-6">
          <p className="text-lg text-[var(--text-secondary)]">Contact section — coming in Step 9</p>
        </section>
      </main>
    </div>
  );
}

export default App;
