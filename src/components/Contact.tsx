import { motion } from "framer-motion";
import { siteConfig } from "../data/config";
import { getSocials, SocialLinkCard } from "./ui/SocialLink";

export default function Contact() {
  const socials = getSocials(siteConfig.socials);

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[var(--surface)]">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Let's Connect</span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            Let's build something great together!
          </h2>
          <p className="text-base text-[var(--text-secondary)] mb-12">
            I'm currently open to new opportunities. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {socials.map((social, i) => (
            <motion.div
              key={social.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <SocialLinkCard config={social} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
