import { motion } from "framer-motion";
import { siteConfig } from "../data/config";
import StatCard from "./ui/StatCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function About() {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    once: true,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">About Me</span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mt-3 mb-12">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {siteConfig.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-base text-[var(--text-secondary)] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {siteConfig.stats.map((stat) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isVisible={isVisible}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
