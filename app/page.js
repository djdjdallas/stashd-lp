"use client";

import { motion } from "framer-motion";

// Grid items configuration - 6x8 grid, images concentrated in center
const gridItems = [
  // Row 0
  { type: "cream" },
  { type: "cream" },
  { type: "image", src: "/images/grid-03.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-11.png", alt: "Screenshot" },
  { type: "cream" },
  { type: "cream" },
  // Row 1
  { type: "cream" },
  { type: "image", src: "/images/grid-05.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-12.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-08.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-17.png", alt: "Screenshot" },
  { type: "cream" },
  // Row 2
  { type: "image", src: "/images/grid-15.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-01.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-06.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-09.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-04.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-14.png", alt: "Screenshot" },
  // Row 3
  { type: "image", src: "/images/grid-02.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-10.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-07.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-13.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-16.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-03.png", alt: "Screenshot" },
  // Row 4
  { type: "image", src: "/images/grid-11.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-05.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-08.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-12.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-01.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-06.png", alt: "Screenshot" },
  // Row 5
  { type: "cream" },
  { type: "image", src: "/images/grid-15.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-09.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-04.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-14.png", alt: "Screenshot" },
  { type: "cream" },
  // Row 6
  { type: "cream" },
  { type: "image", src: "/images/grid-02.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-10.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-07.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-17.png", alt: "Screenshot" },
  { type: "cream" },
  // Row 7
  { type: "cream" },
  { type: "cream" },
  { type: "image", src: "/images/grid-13.png", alt: "Screenshot" },
  { type: "image", src: "/images/grid-16.png", alt: "Screenshot" },
  { type: "cream" },
  { type: "cream" },
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
      <motion.div variants={itemVariants} className={`${baseClasses} bg-[#F5F3EE] p-2`}>
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-contain"
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

  return null;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#F5F3EE] overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-sm"
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[#F5F3EE]">
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
            className="text-base md:text-lg text-[#F5F3EE]/70 mb-6 max-w-xs md:max-w-sm"
          >
            Find any saved idea in 3 seconds. AI-powered organization for
            content creators.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a
              href="https://apps.apple.com/app/stashd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <svg
                viewBox="0 0 120 40"
                className="h-12 md:h-14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="120" height="40" rx="6" fill="#F5F3EE" />
                <path
                  d="M24.769 20.3c-.024-2.625 2.142-3.885 2.24-3.946-1.22-1.785-3.12-2.03-3.797-2.058-1.617-.164-3.155.952-3.974.952-.82 0-2.086-.928-3.428-.903-1.765.026-3.392 1.026-4.3 2.606-1.833 3.18-.469 7.89 1.317 10.473.873 1.262 1.912 2.68 3.278 2.63 1.315-.053 1.812-.851 3.402-.851 1.59 0 2.036.851 3.426.824 1.415-.023 2.308-1.286 3.177-2.552.999-1.464 1.412-2.882 1.436-2.956-.031-.014-2.754-1.057-2.782-4.192zM22.149 12.21c.725-.879 1.215-2.1 1.082-3.317-1.045.043-2.313.697-3.063 1.575-.672.778-1.26 2.02-1.102 3.212 1.167.091 2.358-.593 3.083-1.47z"
                  fill="#1a1a1a"
                />
                <path
                  d="M42.302 27.14h-4.733l-1.137 3.356h-2.004l4.483-12.418h2.082l4.484 12.418h-2.04l-1.135-3.355zm-4.243-1.55h3.752l-1.85-5.446h-.052l-1.85 5.447zM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62-1.292 0-2.306-.584-2.848-1.583h-.043v4.484H46.6V21.442h1.826v1.506h.035c.56-1.007 1.6-1.592 2.874-1.592 2.264 0 3.823 1.816 3.823 4.615zm-1.935 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.956 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zM65.125 25.97c0 2.813-1.507 4.62-3.779 4.62-1.292 0-2.306-.584-2.848-1.583h-.043v4.484h-1.89V21.442h1.827v1.506h.034c.56-1.007 1.6-1.592 2.874-1.592 2.264 0 3.824 1.816 3.824 4.615zm-1.936 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zM71.71 27.036c.138 1.231 1.335 2.04 2.97 2.04 1.566 0 2.693-.809 2.693-1.919 0-.965-.682-1.541-2.29-1.936l-1.61-.389c-2.28-.55-3.339-1.617-3.339-3.347 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.484 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.607 1.626 3.607 3.442 0 2.323-1.85 3.778-4.794 3.778-2.754 0-4.613-1.42-4.734-3.666h1.902zM83.346 19.3v2.142h1.722v1.472h-1.722v5.014c0 .78.347 1.144 1.109 1.144.2-.004.4-.018.613-.044v1.463c-.36.068-.724.098-1.09.09-1.843 0-2.564-.692-2.564-2.456v-5.21h-1.316v-1.473h1.316V19.3h1.932zM85.999 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.64 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.639zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.107 2.4 3.107s2.401-1.145 2.401-3.107zM96.186 21.442h1.792v1.541h.043c.258-1.007 1.162-1.627 2.211-1.627.224 0 .449.026.664.078v1.764a2.417 2.417 0 00-.862-.13c-1.127 0-1.958.757-1.958 1.996v5.432h-1.89v-9.054zM109.384 27.837c-.254 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.765-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.505 0 4.08 1.72 4.08 4.466v.648h-6.394v.112c0 1.549.972 2.565 2.436 2.565 1.032 0 1.85-.49 2.106-1.284h1.749zm-6.282-2.702h4.493c-.043-1.386-.939-2.298-2.211-2.298-1.265 0-2.194.93-2.282 2.298z"
                  fill="#1a1a1a"
                />
                <path
                  d="M37.826 8.731c1.49 0 2.727 1.033 2.727 2.9 0 1.876-1.237 2.908-2.727 2.908h-2.3v-5.808h2.3zm-1.357 4.973h1.297c1.05 0 1.714-.73 1.714-2.065 0-1.327-.665-2.065-1.714-2.065h-1.297v4.13zM41.4 12.445c0-1.41.83-2.225 2.188-2.225 1.357 0 2.187.815 2.187 2.225 0 1.415-.83 2.226-2.187 2.226-1.358 0-2.187-.81-2.187-2.226zm3.432 0c0-.97-.433-1.5-1.244-1.5-.812 0-1.245.53-1.245 1.5 0 .975.433 1.5 1.245 1.5.811 0 1.244-.525 1.244-1.5zM51.562 14.539h-.952l-.96-3.42h-.073l-.96 3.42h-.943l-1.279-4.222h.927l.821 3.543h.069l.956-3.543h.884l.956 3.543h.073l.817-3.543h.913l-1.249 4.222zM53.854 10.317h.879v.715h.068c.216-.502.707-.802 1.357-.802 1.007 0 1.566.632 1.566 1.754v2.555h-.927v-2.368c0-.752-.32-1.124-.982-1.124-.663 0-1.033.45-1.033 1.176v2.316h-.928v-4.222zM59.094 8.437h.927v6.102h-.927V8.437zM61.218 12.445c0-1.41.83-2.225 2.187-2.225 1.358 0 2.188.815 2.188 2.225 0 1.415-.83 2.226-2.188 2.226-1.357 0-2.187-.81-2.187-2.226zm3.432 0c0-.97-.433-1.5-1.245-1.5-.811 0-1.244.53-1.244 1.5 0 .975.433 1.5 1.244 1.5.812 0 1.245-.525 1.245-1.5zM66.4 13.445c0-.81.603-1.277 1.676-1.344l1.22-.07v-.39c0-.475-.314-.744-.921-.744-.498 0-.843.182-.943.498h-.9c.09-.78.818-1.28 1.898-1.28 1.184 0 1.792.562 1.792 1.515v3.069h-.884v-.632h-.073c-.27.45-.769.719-1.34.719-.832 0-1.525-.502-1.525-1.341zm2.896-.39v-.377l-1.1.07c-.62.04-.9.252-.9.649 0 .403.35.634.83.634.627 0 1.17-.395 1.17-.975zM71.348 12.445c0-1.34.69-2.213 1.766-2.213.638 0 1.153.298 1.397.815h.069V8.437h.927v6.102h-.88v-.71h-.072c-.268.494-.775.793-1.44.793-1.086 0-1.767-.873-1.767-2.177zm.956 0c0 .905.45 1.448 1.203 1.448.749 0 1.211-.55 1.211-1.444 0-.888-.468-1.448-1.21-1.448-.749 0-1.204.547-1.204 1.444zM79.234 12.445c0-1.41.83-2.225 2.188-2.225 1.357 0 2.187.815 2.187 2.225 0 1.415-.83 2.226-2.187 2.226-1.358 0-2.188-.81-2.188-2.226zm3.433 0c0-.97-.433-1.5-1.245-1.5-.811 0-1.244.53-1.244 1.5 0 .975.433 1.5 1.244 1.5.812 0 1.245-.525 1.245-1.5zM84.67 10.317h.878v.715h.069c.216-.502.707-.802 1.357-.802 1.007 0 1.566.632 1.566 1.754v2.555h-.927v-2.368c0-.752-.32-1.124-.983-1.124-.662 0-1.032.45-1.032 1.176v2.316h-.928v-4.222zM93.515 9.074v1.268h1.02v.754h-1.02v2.152c0 .438.18.632.588.632.145 0 .29-.009.431-.026v.745c-.202.035-.406.053-.61.053-.995 0-1.336-.312-1.336-1.194v-2.362h-.746v-.754h.746V9.074h.927zM95.7 8.437h.918v2.603h.073c.224-.506.72-.811 1.392-.811.998 0 1.557.636 1.557 1.758v2.552h-.927v-2.364c0-.749-.336-1.128-.996-1.128-.66 0-1.09.463-1.09 1.18v2.312H95.7V8.437zM105.128 13.532c-.228.78-.943 1.284-1.996 1.284-1.314 0-2.152-.867-2.152-2.217 0-1.344.851-2.234 2.135-2.234 1.266 0 2.074.838 2.074 2.16v.32h-3.27v.053c.035.755.476 1.232 1.175 1.232.523 0 .9-.19 1.099-.598h.935zm-3.205-1.459h2.33c-.026-.676-.44-1.123-1.136-1.123-.692 0-1.14.455-1.194 1.123z"
                  fill="#1a1a1a"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Angled Grid Mosaic - Right Side */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[65%] lg:w-[55%]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              transform: "rotate(-12deg)",
              transformOrigin: "center center",
            }}
          >
            <div className="grid grid-cols-6 gap-1 w-[900px] md:w-[1200px] lg:w-[1500px]">
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
        className="fixed bottom-0 left-0 right-0 z-30 bg-[#1a1a1a]/90 backdrop-blur-sm"
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a
              href="#"
              className="text-[#F5F3EE] hover:opacity-60 transition-opacity"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="#"
              className="text-[#F5F3EE] hover:opacity-60 transition-opacity"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@stashd.app"
              className="text-[#F5F3EE] hover:opacity-60 transition-opacity"
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
            className="text-sm text-[#F5F3EE]/60 hover:text-[#F5F3EE] transition-colors"
          >
            Terms & Privacy
          </a>
        </div>
      </motion.footer>
    </div>
  );
}
