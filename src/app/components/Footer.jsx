import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: "github",
      href: "https://github.com/kavindualwis",
      label: "GitHub",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/in/kavindualwis/",
      label: "LinkedIn",
    },
    {
      icon: "email",
      href: "mailto:kavindualwis.work@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white mt-16 md:mt-24 py-12 md:py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
              ALWIS<span className="text-slate-900 dark:text-white">DEV</span>
            </h3>
            <p className="text-slate-700 dark:text-slate-400 mb-6 leading-relaxed">
              Transforming ideas into elegant digital solutions through creative
              code and thoughtful design.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target={social.icon !== "email" ? "_blank" : undefined}
                  rel={social.icon !== "email" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/10 transition-all"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon === "github" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {social.icon === "email" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
              Get In Touch
            </h3>
            <div className="space-y-3 text-slate-700 dark:text-slate-400">
              <div>
                <p className="font-medium">Colombo, Sri Lanka</p>
              </div>
              <div>
                <motion.a
                  href="mailto:kavindualwis.work@gmail.com"
                  className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  kavindualwis.work@gmail.com
                </motion.a>
              </div>
              <div>
                <p className="font-medium">+94 776892127</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 dark:text-slate-500 text-sm">
            © {currentYear} Kavindu Alwis. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
