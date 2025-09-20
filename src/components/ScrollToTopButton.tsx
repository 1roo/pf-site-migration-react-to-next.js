"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(false);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        return;
      }

      setIsVisible(false);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        if (window.scrollY > 0) {
          setIsVisible(true);
        }
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-lg
        transition-all duration-500 transform cursor-pointer
        ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      aria-label="맨 위로"
    >
      <FiArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
