import { motion } from "framer-motion";
import { Trophy, Star, Code2, Medal, type LucideIcon } from "lucide-react";
import { education } from "../data/education";
import { achievements } from "../data/achievements";

const achievementIconMap: Record<string, LucideIcon> = { Trophy, Star, Code2, Medal };

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="overline">Education</span>
              <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mt-3 mb-12">
                My academic journey
              </h2>
            </motion.div>

            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--border)]" />

              {education.map((entry, i) => (
                <motion.div
                  key={entry.dateRange}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-10 last:mb-0"
                >
                  {/* Dot */}
                  <div
                    className={`absolute -left-8 top-1.5 w-[22px] h-[22px] rounded-full border-2 ${
                      entry.isCurrent
                        ? "bg-[var(--accent)] border-[var(--accent)]"
                        : "bg-[var(--bg)] border-[var(--border)]"
                    }`}
                  />
                  <span className="text-xs text-[var(--text-muted)] font-medium">
                    {entry.dateRange}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mt-1">
                    {entry.degree}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{entry.institution}</p>
                  {entry.note && (
                    <p className="text-xs text-[var(--text-muted)] mt-1">{entry.note}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="overline">Achievements</span>
              <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mt-3 mb-12">
                Some highlights
              </h2>
            </motion.div>

            <div className="space-y-6">
              {achievements.map((item, i) => {
                const Icon = achievementIconMap[item.icon] || Trophy;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                      <Icon size={18} className="text-[var(--accent-hover)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
