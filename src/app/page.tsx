"use client";
import MainPage from "@/components/MainPage";
import AboutMePage from "@/components/AboutMePage";
import SkillsPage from "@/components/SkillsPage";
import ArchivePage from "@/components/ArchivePage";
import ProjectsPage from "@/components/ProjectsPage";
import CareerPage from "@/components/CareerPage";
import { useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);
  return (
    <>
      <Header mainRef={mainRef} />
      <main>
        <MainPage mainRef={mainRef} />
        <AboutMePage />
        <SkillsPage />
        <ArchivePage />
        <ProjectsPage />
        <CareerPage />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
