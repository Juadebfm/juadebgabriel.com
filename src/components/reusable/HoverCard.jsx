import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../utils/utils";
import { ThemeContext } from "../../context/ThemeContext";

export const HoverEffect = ({ className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isDarkMode } = useContext(ThemeContext);

  const items = [
    {
      step: 1,
      title: "Set your Preferences",
      description:
        "Share your vision for design, development, or marketing. Outline your style and goals to tailor our services to your needs.",
    },
    {
      step: 2,
      title: "Let Us do the work",
      description:
        "Sit back and relax while we transform your preferences into creative, impactful solutions designed for you.",
    },
    {
      step: 3,
      title: "Review and be happy",
      description:
        "Review the results and let us know your thoughts. We're committed to perfecting the details to meet your standards.",
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-main_orange/[0.4] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div
              className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
                isDarkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Step {item.step}
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-10 overflow-hidden border border-transparent cursor-pointer",
        isDarkMode
          ? "bg-black border-white/[0.2] group-hover:border-slate-700"
          : "bg-white border-black/[0.2] group-hover:border-slate-300",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <h4
      className={cn(
        "font-bold tracking-wide mt-2 text-lg",
        isDarkMode ? "text-white" : "text-black",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <p
      className={cn(
        "mt-4 tracking-wide leading-relaxed text-sm",
        isDarkMode ? "text-primary_white" : "text-zinc-600",
        className
      )}
    >
      {children}
    </p>
  );
};
