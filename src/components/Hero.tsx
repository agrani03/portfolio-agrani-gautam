import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { siteConfig } from "../data/config";
import { useState } from "react";

export default function Hero() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleResumeDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if file exists by trying a HEAD request
    fetch(siteConfig.resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) {
          e.preventDefault();
          showToast();
        }
      })
      .catch(() => {
        e.preventDefault();
        showToast();
      });
  };

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleViewProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--nav-height") || "64"
      );
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-var(--nav-height))] flex items-center"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--accent)" }}
        />
        <div
          className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Text Column (60%) */}
          <div className="md:col-span-3 order-2 md:order-1">
            {/* Available for Work Badge */}
            {siteConfig.availableForWork && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] mb-6"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--text-secondary)]">
                  Available for Work
                </span>
              </motion.div>
            )}

            {/* Display Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-display text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] mb-6"
            >
              {siteConfig.tagline}
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed mb-8"
            >
              I'm {siteConfig.name}, a {siteConfig.role.toLowerCase()} passionate about building
              clean, scalable, and user-friendly web applications.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={handleViewProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg)] hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href={siteConfig.resumeUrl}
                download
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
              >
                Download Resume
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>

          {/* Photo Column (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-2 order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-full md:h-[420px] rounded-2xl overflow-hidden shadow-lg group">
              {/* Accent border glow */}
              <div
                className="absolute -inset-[2px] rounded-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-sm"
                style={{ background: `linear-gradient(135deg, var(--accent), transparent, var(--accent))` }}
              />
              <img
                src="/images/hero-photo.jpg"
                alt={`${siteConfig.name} — ${siteConfig.role}`}
                width={400}
                height={480}
                loading="eager"
                className="relative w-full h-full object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg)] text-sm font-medium shadow-lg transition-all duration-300 ${
          toastVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        Resume coming soon ✨
      </div>
    </section>
  );
}
