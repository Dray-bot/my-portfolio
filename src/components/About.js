"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 bg-white text-[#1f1f1f] font-outfit"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-black">About Me</h2>

          <p className="text-lg leading-relaxed text-gray-700">
            I&apos;m <strong>Ajibola Ayomide</strong>, but everyone calls me{" "}
            <strong>Dray</strong>. I&apos;m a self-taught Frontend Developer and a
            full-time Computer Science student at{" "}
            <strong>Lead City University, Ibadan</strong> (Class of 2028).
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            My dev journey started in a tech school that shut down after 3
            months. Most would&apos;ve stopped — I didn&apos;t. I locked in, taught
            myself from scratch, and started building projects with real-world
            impact. I design interfaces that are clean, responsive, and
            user-focused.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Some of my recent work includes:
            <br />• <strong>BuildWise</strong> – construction services platform
            <br />• <strong>Le Tailore</strong> – fashion portfolio for fashion
            designers <br />• <strong>Bookium</strong> – book listing &amp; preview
            web app <br />• <strong>Homy</strong> – a full-blown real estate
            platform with subscription and agent verification features (in
            progress)
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            I use stacks like <strong>React.js</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>Zustand</strong>,{" "}
            <strong>Framer Motion</strong>, <strong>Radix UI</strong>, and more
            to bring ideas to life. Whether it&apos;s a landing page, web app, or
            dashboard — I build for clarity, speed, and mobile-first
            experiences.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            I&apos;m open to{" "}
            <strong>
              internships, freelance projects, and remote frontend roles
            </strong>
            . Let&apos;s collab and ship something dope — clean UI, optimized UX, and
            real results.
          </p>
        </motion.div>

        {/* Visual Accent / Quote */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full border-l-4 border-[#facc15] pl-6"
        >
          <p className="text-2xl text-[#1f2937] font-semibold mb-4 italic">
            &quot;I don&apos;t come from a perfect start, but I show up every day to
            build like I&apos;ve already made it.&quot;
          </p>
          <p className="text-md text-gray-600 mb-6">
            Resilient. Self-taught. Vision-driven. That&apos;s who I am and that&apos;s
            the energy I bring into every single line of code.
          </p>

          <div className="mt-6">
            <p className="text-sm text-black">What I Work With:</p>
            <ul className="list-disc list-inside text-black mt-2 space-y-1">
              <li>React.js &amp; Next.js</li>
              <li>Tailwind CSS, Radix UI, Framer Motion</li>
              <li>Zustand, React Query, React Hook Form + Zod</li>
              <li>Firebase, Clerk/Auth0, Socket.io</li>
              <li>UploadThing, Cloudinary, Google Maps API</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
