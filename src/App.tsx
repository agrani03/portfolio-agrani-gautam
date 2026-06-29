import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <Navbar />

      {/* Spacer for fixed nav */}
      <div style={{ height: "var(--nav-height)" }} />

      {/* Placeholder sections for scroll testing */}
      <main>
        <section id="hero" className="min-h-screen flex items-center justify-center px-6">
          <p className="text-lg text-[var(--text-secondary)]">Hero section — coming in Step 4</p>
        </section>

        <section id="about" className="min-h-[60vh] flex items-center justify-center px-6">
          <p className="text-lg text-[var(--text-secondary)]">About section — coming in Step 5</p>
        </section>

        <section id="skills" className="min-h-[60vh] flex items-center justify-center px-6">
          <p className="text-lg text-[var(--text-secondary)]">Skills section — coming in Step 6</p>
        </section>

        <section id="projects" className="min-h-[60vh] flex items-center justify-center px-6">
          <p className="text-lg text-[var(--text-secondary)]">Projects section — coming in Step 7</p>
        </section>

        <section id="education" className="min-h-[60vh] flex items-center justify-center px-6">
          <p className="text-lg text-[var(--text-secondary)]">Education section — coming in Step 8</p>
        </section>

        <section id="contact" className="min-h-[60vh] flex items-center justify-center px-6">
          <p className="text-lg text-[var(--text-secondary)]">Contact section — coming in Step 9</p>
        </section>
      </main>
    </div>
  );
}

export default App;
