"use client";

import React from "react";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F3F4F6] border-t border-[#EAB308]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-start">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Dray</h3>
          <p className="text-sm text-[#4B5563] max-w-sm leading-relaxed">
            Frontend Developer crafting clean, scalable, and impactful web
            experiences. Let’s build something legendary.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-semibold text-[#1F2937]">
            Connect with me
          </h4>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Dray-bot"
              target="_blank"
              rel="noreferrer"
              className="text-[#1F2937] hover:text-[#EAB308] transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ayomide-ajibola-4989a2324"
              target="_blank"
              rel="noreferrer"
              className="text-[#1F2937] hover:text-[#EAB308] transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samueldray180@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#1F2937] hover:text-[#EAB308] transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.instagram.com/dray_11_?igsh=MTN2Ym1iMjR5bjl6ZQ=="
              target="_blank"
              rel="noreferrer"
              className="text-[#1F2937] hover:text-[#EAB308] transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://x.com/ajibola_ay33291?t=avzg-21CopHFxz7M3hROLA&s=09" // update with your Twitter/X
              target="_blank"
              rel="noreferrer"
              className="text-[#1F2937] hover:text-[#EAB308] transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-semibold text-[#1F2937]">Navigate</h4>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-[#1F2937] hover:text-[#EAB308] transition"
          >
            <ArrowUp size={16} />
            Back to top
          </button>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-[#E5E7EB] text-center text-xs text-[#6B7280] py-5">
        &copy; {currentYear}{" "}
        <span className="font-semibold text-[#1F2937]">Dray</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
