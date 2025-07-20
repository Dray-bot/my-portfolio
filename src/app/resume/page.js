"use client";

import { motion } from "framer-motion";
import { jsPDF } from "jspdf";

export default function ResumePage() {
  const handleDownload = () => {
    const doc = new jsPDF();

    const content = `
Dray [Ajibola Ayomide]
Front-End Developer • Ibadan, Nigeria
samueldray180@gmail.com • +234 816 818 1218
GitHub: github.com/Dray-bot
LinkedIn: linkedin.com/in/ayomide-ajibola-4989a2324

PROFESSIONAL SUMMARY
Self-taught and passionate Front-End Developer currently in 200 Level at Lead City University, Ibadan. Known for building sleek, high-performing UI using React, Next.js, and Tailwind CSS. Strong design instincts and experience across industries like real estate, fashion, construction, and publishing. Focused on fast delivery, clean code, and real business impact.

TECH STACK
- React, Next.js, Tailwind CSS, Framer Motion
- Zustand, React Query, Radix UI, Vite
- HTML5, CSS3, JavaScript (ES6+)
- Git, GitHub, Firebase, Figma (basic), Cloudinary
- Clerk/Auth0, UploadThing, Google Maps API

EXPERIENCE
Freelance Front-End Developer — Remote (2024 – Present)
• Built production-grade UIs for BuildWise, Bookium, and Le Tailore.
• Currently developing Homy — a real estate platform with verified agent listings, subscription flows, and internal chat.
• Handles responsive design, animations, and performance tuning with React + Tailwind.
• Collaborates with designers and backend engineers in a real team workflow.

EDUCATION
Lead City University, Ibadan — BSc. Computer Science
2024 – 2028 (200 Level)

Tech School (Discontinued after 3 months) — 2024
• Continued learning solo through documentation, online videos, and building projects.

Self-Taught Developer — 2024 – Present
• Over 15 full frontend builds completed.
• Grew expertise in UI logic, motion design, and modern JavaScript tooling.

REFERENCES
Available upon request
`;

    doc.setFont("Courier", "normal");
    doc.setFontSize(10);
    doc.text(content, 10, 10);
    doc.save("Dray_Resume.pdf");
  };

  return (
    <main className="min-h-screen px-6 py-16 bg-white text-[#1F2937] font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-black">Resume</h1>

        {/* About Me */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-2">About Me</h2>
          <p className="text-gray-800 leading-relaxed">
            I&apos;m Dray, a self-taught Nigerian Front-End Developer and a 200 Level Computer Science student at Lead City University, Ibadan. I started out at a tech school that closed after 3 months, but that didn&apos;t stop me. I taught myself how to build and deploy real-world apps, and now I work with teams to create fast, beautiful products using React and Tailwind. I&apos;m currently building a real estate platform called <strong>Homy</strong>, built for scale and real users.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-2">Skills & Tech</h2>
          <ul className="grid grid-cols-2 list-disc list-inside text-gray-800 gap-y-2">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>Zustand</li>
            <li>React Query</li>
            <li>Radix UI</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-2">Experience</h2>
          <div className="space-y-3 text-gray-800">
            <div>
              <h3 className="font-semibold text-lg">Frontend Developer — Freelance</h3>
              <p className="text-sm text-gray-600">Remote · 2024 – Present</p>
              <p>
                Developed and shipped production apps like <strong>BuildWise</strong> (construction),
                <strong> Bookium</strong> (books), and <strong>Le Tailore</strong> (fashion brand). I&apos;m now leading the frontend on
                <strong> Homy</strong> — a real estate app for verified agents with chat, subscriptions, and performance-first UI. I handle animation, responsiveness, and all things frontend.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-2">Education</h2>
          <div className="mb-4">
            <p className="font-semibold">Lead City University, Ibadan</p>
            <p className="text-sm text-gray-600">BSc. Computer Science — 2024 – 2028</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Tech School (Discontinued)</p>
            <p className="text-sm text-gray-600">2024</p>
            <p className="text-gray-800">
              Spent 3 months at a tech school before it shut down. Took the initiative to continue learning independently.
            </p>
          </div>
          <div>
            <p className="font-semibold">Self-Taught Developer</p>
            <p className="text-sm text-gray-600">2024 – Present</p>
            <p className="text-gray-800">
              Built over 15 frontend projects using React and Tailwind. Constantly pushing boundaries in animation, mobile UX, and startup-level design systems.
            </p>
          </div>
        </section>

        {/* Download Resume */}
        <section className="mt-8">
          <button
            onClick={handleDownload}
            className="inline-block px-6 py-3 bg-[#EAB308] text-black font-bold rounded hover:bg-yellow-600 transition"
          >
            Download PDF
          </button>
        </section>
      </motion.div>
    </main>
  );
}
