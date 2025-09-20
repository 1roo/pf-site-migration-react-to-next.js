"use client";

import Image from "next/image";
import { useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export default function Modal({ isOpen, onClose, images }: ModalProps) {
  const scrollContainerId = "image-scroll-container";

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") scroll("left");
      if (e.key === "ArrowRight") scroll("right");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(scrollContainerId);
    if (!container) return;

    const scrollAmount = 400;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        className="
          relative bg-white rounded-xl shadow-xl 
          w-[70%] max-w-4xl aspect-[5/4]
        "
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl z-10"
          onClick={onClose}
        >
          ✕
        </button>

        {/* 캐러셀 */}
        <div className="absolute inset-0 flex items-center justify-between gap-4 px-8">
          <button
            onClick={() => scroll("left")}
            className="text-3xl text-gray-700 bg-white/70 rounded-full p-2 hover:bg-white"
          >
            <IoChevronBack />
          </button>

          <div
            id={scrollContainerId}
            className="flex items-center gap-4 overflow-x-auto scroll-smooth w-full h-full px-4"
          >
            {images.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`screenshot ${idx + 1}`}
                className="max-h-[70%] object-contain rounded-lg flex-shrink-0"
              />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="text-3xl text-gray-700 bg-white/70 rounded-full p-2 hover:bg-white"
          >
            <IoChevronForward />
          </button>
        </div>
      </div>
    </div>
  );
}
