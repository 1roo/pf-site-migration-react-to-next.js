"use client";

import React, { useEffect, useState } from "react";

interface HeaderProps {
  mainRef: React.RefObject<HTMLElement | null>;
}

const Header: React.FC<HeaderProps> = ({ mainRef }) => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;

      const rect = mainRef.current.getBoundingClientRect();

      if (rect.bottom <= 0) {
        setLightMode(true);
      } else {
        setLightMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mainRef]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 max-w-screen overflow-x-hidden
              flex items-center justify-center md:justify-between
              px-4 md:px-8 py-4 z-50 transition-colors duration-200 ${
                lightMode ? "bg-white text-black shadow-md" : "text-white"
              }`}
    >
      <span className="text-xl font-bold text-center md:w-auto md:text-left select-none cursor-default">
        HANARAE&apos;S PORTFOLIO
      </span>
      <nav className="hidden md:flex gap-6 font-medium">
        <a href="#main" className="hover:opacity-70">
          HOME
        </a>
        <a href="#about" className="hover:opacity-70">
          ABOUT ME
        </a>
        <a href="#skills" className="hover:opacity-70">
          SKILLS
        </a>
        <a href="#archive" className="hover:opacity-70">
          ARCHIVE
        </a>
        <a href="#projects" className="hover:opacity-70">
          PROJECTS
        </a>
        <a href="#career" className="hover:opacity-70">
          CAREER
        </a>
      </nav>
    </header>
  );
};

export default Header;
