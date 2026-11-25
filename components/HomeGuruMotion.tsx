
"use client";

import {
  motion,
  MotionConfig,
  useReducedMotion,
  type Variants,
} from "motion/react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const features = [
  {
    number: "01",
    icon: "✦",
    title: "AI-Powered Learning",
    description:
      "Personalized study plans, instant doubt assistance and intelligent practice recommendations.",
  },
  {
    number: "02",
    icon: "◈",
    title: "Verified Local Tutors",
    description:
      "Discover trusted teachers nearby using qualifications, experience and genuine reviews.",
  },
  {
    number: "03",
    icon: "♡",
    title: "Student Wellbeing",
    description:
      "Weekly check-ins, study-life balance and access to professional support.",
  },
];

export default function HomeGuruMotion() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen overflow-hidden bg-[#F7F3EA] text-[#17221D]">

        {/* NAVBAR */}
        <motion.nav
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="sticky top-0 z-50 flex items-center justify-between border-b border-[#123C32]/10 bg-[#F7F3EA]/90 px-6 py-5 backdrop-blur-xl md:px-14"
        >
          <a href="#" className="text-2xl font-bold text-[#123C32]">
            HomeGuru<span className="text-[#D4A437]">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {["Home", "Find Tutors", "For Teachers", "Wellbeing"].map(
              (item) => (
                <motion.a
                  key={item}
                  href="#features"
                  whileHover={{ y: -2 }}
                  className="group relative text-sm font-medium"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4A437] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              )
            )}
          </div>

          <motion.a
            href="#find-tutors"
            whileHover={
              reduceMotion ? undefined : { scale: 1.04, y: -2 }
            }
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-[#123C32] px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            Get Started →
          </motion.a>
        </motion.nav>

        {/* HERO */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-14">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="mb-7 inline-block rounded-full bg-[#D4A437]/15 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#123C32]"
            >
              ✦ VERIFIED LEARNING ECOSYSTEM
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-semibold leading-[1.12] tracking-tight md:text-7xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Top home tutors
              <br />
              in your own city.
              <span className="mt-3 block text-[#123C32] italic">
                Learning feels closer.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-lg text-lg leading-8 text-[#59645C]"
            >
              Find trusted tutors, learn with intelligent AI assistance
              and grow confidently without leaving your family.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-4"
            >
              <motion.a
                href="#find-tutors"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, boxShadow: "0 12px 25px #123C3230" }
                }
                whileTap={{ scale: 0.96 }}
                className="rounded-full bg-[#123C32] px-8 py-4 font-semibold text-[#F7F3EA] transition-colors hover:bg-[#D4A437] hover:text-[#123C32]"
              >
                Find a Tutor →
              </motion.a>

              <motion.a
                href="#features"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full border border-[#123C32] px-8 py-4 font-semibold text-[#123C32] transition-colors hover:bg-[#123C32] hover:text-white"
              >
                Explore HomeGuru
              </motion.a>
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex min-h-[420px] items-center justify-center rounded-[2rem] bg-[#E9E1D1] p-8"
          >
            <div className="absolute -right-3 -top-5 h-28 w-28 rounded-full bg-[#D4A437]/30 blur-2xl" />

            <div className="relative w-full max-w-sm rounded-[2rem] bg-[#123C32] p-9 text-white shadow-2xl">

              <motion.div
                animate={
                  reduceMotion ? undefined : { y: [0, -9, 0] }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 -top-6 rounded-2xl border border-white/20 bg-white p-4 text-[#123C32] shadow-xl"
              >
                <span className="text-sm font-bold">✓ Verified Tutor</span>
                <p className="mt-1 text-xs text-gray-500">
                  Trusted & reviewed
                </p>
              </motion.div>

              <div className="mb-8 text-6xl text-[#D4A437]">✦</div>

              <p className="text-sm uppercase tracking-[0.25em] text-[#D4A437]">
                HomeGuru Learning
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight">
                A better way
                <br />
                to learn.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/70">
                Trusted teachers. Smarter tools.
                A little more care.
              </p>

              <div className="mt-9 flex items-center justify-between border-t border-white/20 pt-6">
                <span className="text-sm">Learn. Grow. At Home.</span>
                <span className="text-2xl text-[#D4A437]">↗</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-20 md:px-14">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-14 text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4A437]"
            >
              WHY HOMEGURU
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-semibold text-[#123C32] md:text-5xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              More than finding a tutor.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.article
                key={feature.number}
                variants={fadeUp}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        boxShadow: "0 20px 40px #123C3218",
                      }
                }
                className="group rounded-3xl border border-[#123C32]/10 bg-white/60 p-8 transition-colors hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl text-[#D4A437]">
                    {feature.icon}
                  </span>
                  <span className="text-sm text-[#123C32]/40">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-9 text-xl font-bold text-[#123C32]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-[#687169]">
                  {feature.description}
                </p>

                <span className="mt-8 inline-block text-sm font-bold text-[#123C32] transition-transform group-hover:translate-x-2">
                  Discover more →
                </span>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-6 mb-12 rounded-[2rem] bg-[#123C32] px-8 py-20 text-center text-white md:mx-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A437]">
            YOUR LEARNING JOURNEY STARTS HERE
          </p>

          <h2
            className="mt-6 text-4xl font-semibold md:text-6xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Learn. Grow.
            <span className="block text-[#D4A437] italic">
              At Home.
            </span>
          </h2>

          <motion.a
            href="#find-tutors"
            whileHover={
              reduceMotion ? undefined : { scale: 1.06 }
            }
            whileTap={{ scale: 0.95 }}
            className="mt-9 inline-block rounded-full bg-[#D4A437] px-9 py-4 font-bold text-[#123C32]"
          >
            Start Your Journey →
          </motion.a>
        </motion.section>

      </main>
    </MotionConfig>
  );
}
