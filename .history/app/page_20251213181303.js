"use client";

import { motion } from "framer-motion";

// Grid items configuration - mix of images, black squares, and numbers
const gridItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=400&fit=crop",
    alt: "Content creator filming",
  },
  { type: "number", value: "47" },
  { type: "black" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=400&fit=crop",
    alt: "Phone with ideas",
  },
  { type: "number", value: "12" },
  { type: "cream" },
  { type: "black" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=400&fit=crop",
    alt: "Workspace with laptop",
  },
  { type: "number", value: "89" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=400&h=400&fit=crop",
    alt: "Editing content",
  },
  { type: "cream" },
  { type: "black" },
  { type: "number", value: "23" },
  { type: "black" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop",
    alt: "Creative brainstorming",
  },
  { type: "cream" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    alt: "Analytics on screen",
  },
  { type: "number", value: "156" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=400&fit=crop",
    alt: "Team collaboration",
  },
  { type: "black" },
  { type: "cream" },
  { type: "number", value: "8" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
    alt: "Productivity",
  },
  { type: "black" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop",
    alt: "Creative work",
  },
  { type: "number", value: "34" },
  { type: "cream" },
  { type: "black" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
    alt: "Teamwork",
  },
  { type: "number", value: "61" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=400&fit=crop",
    alt: "Social media",
  },
  { type: "black" },
  { type: "cream" },
  { type: "number", value: "5" },
  { type: "black" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=400&fit=crop",
    alt: "Data visualization",
  },
  { type: "cream" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=400&h=400&fit=crop",
    alt: "Creative setup",
  },
  { type: "number", value: "19" },
  { type: "black" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=400&fit=crop",
    alt: "Minimal desk",
  },
  { type: "cream" },
  { type: "number", value: "73" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop",
    alt: "Office space",
  },
  { type: "black" },
  { type: "cream" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop",
    alt: "Tech devices",
  },
  { type: "number", value: "42" },
  { type: "black" },
  { type: "cream" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
    alt: "Team working",
  },
  { type: "number", value: "91" },
  { type: "black" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function GridItem({ item }) {
  const baseClasses = "aspect-square overflow-hidden";

  if (item.type === "image") {
    return (
      <motion.div variants={itemVariants} className={baseClasses}>
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    );
  }

  if (item.type === "black") {
    return (
      <motion.div
        variants={itemVariants}
        className={`${baseClasses} bg-[#1a1a1a]`}
      />
    );
  }

  if (item.type === "cream") {
    return (
      <motion.div
        variants={itemVariants}
        className={`${baseClasses} bg-[#F5F3EE]`}
      />
    );
  }

  if (item.type === "number") {
    return (
      <motion.div
        variants={itemVariants}
        className={`${baseClasses} bg-[#F5F3EE] flex items-center justify-center`}
      >
        <span className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-4xl font-light">
          {item.value}
        </span>
      </motion.div>
    );
  }

  return null;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3EE]/90 backdrop-blur-sm"
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            STASH&apos;D
          </h1>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="min-h-screen relative">
        {/* Hero Text - Left Side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="absolute left-6 md:left-10 lg:left-16 top-1/2 -translate-y-1/2 z-20 max-w-sm md:max-w-md lg:max-w-lg"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Stop losing
            <br />
            viral ideas.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-[#1a1a1a]/70 mb-6 max-w-xs md:max-w-sm"
          >
            Find any saved idea in 3 seconds. AI-powered organization for
            content creators.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a
              href="#waitlist"
              className="inline-flex items-center text-lg md:text-xl font-medium group"
            >
              Waitlist
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Angled Grid Mosaic - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-[70%] lg:w-[60%] overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "rotate(-12deg) scale(1.4)",
              transformOrigin: "center center",
            }}
          >
            <div className="grid grid-cols-6 gap-[3px] w-[900px] lg:w-[1100px]">
              {gridItems.map((item, index) => (
                <GridItem key={index} item={item} />
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-30 bg-[#F5F3EE]/90 backdrop-blur-sm"
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a
              href="#"
              className="text-[#1a1a1a] hover:opacity-60 transition-opacity"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="#"
              className="text-[#1a1a1a] hover:opacity-60 transition-opacity"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@stashd.app"
              className="text-[#1a1a1a] hover:opacity-60 transition-opacity"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>

          <a
            href="#"
            className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors"
          >
            Terms & Privacy
          </a>
        </div>
      </motion.footer>
    </div>
  );
}
