"use client";

import { IoImageOutline } from "react-icons/io5";
import { VscBook, VscGithubInverted } from "react-icons/vsc";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import Modal from "../components/Modal";

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const healiaryImages = [
    "/assets/images/healiary/1.png",
    "/assets/images/healiary/2.png",
    "/assets/images/healiary/3.png",
    "/assets/images/healiary/4.png",
    "/assets/images/healiary/5.png",
    "/assets/images/healiary/6.png",
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-[#EEEEEE] p-16 text-lg"
    >
      <h2 className="text-3xl font-semibold">PROJECTS</h2>
      <div className="border border-black w-44" />
      <div className="mb-10 mt-1 border border-black h-2 w-44 bg-black" />

      <ProjectCard
        title="Healiary"
        roles={[
          { name: "기획", color: "bg-[#C2A500]/60 text-black" },
          { name: "프론트", color: "bg-[#61DAFB] text-white" },
          { name: "백", color: "bg-[#D13D35]/60 text-white" },
        ]}
        period="2025.04.02 ~ 2025.04.14 (12일)"
        teamInfo="개인 프로젝트"
        description="사용자가 작성한 일기와 선택한 색상을 기반으로 감정을 분석해주는 일기장 서비스"
        techStack="Next.js, TypeScript, Tailwind CSS, NextAuth.js, Prisma"
        highlights={[
          "사용자가 일기를 기록하고, 그날의 감정을 색상 선택으로 표현",
          "선택한 색상을 바탕으로 감정을 해석하고 시각화된 피드백 제공",
          "일자별 감정을 모아 한눈에 볼 수 있는 기록/통계 기능",
        ]}
        links={[
          {
            icon: <VscGithubInverted className="text-2xl" />,
            label: "GitHub",
            href: "https://github.com/1roo/healiary",
          },
          {
            icon: <IoImageOutline className="text-2xl" />,
            label: "IMAGES",
            href: "#",
            onClick: () => setIsModalOpen(true),
          },
        ]}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={healiaryImages}
      />

      <ProjectCard
        title="동네방네"
        roles={[
          { name: "기획", color: "bg-[#C2A500]/60 text-black" },
          { name: "프론트", color: "bg-[#17BBD8]/60 text-white" },
        ]}
        period="2024.03.26 ~ 2024.05.07 (총6주)"
        teamInfo="FE 2인 / BE 4인"
        description="주민들이 직접 우리 동네의 숨은 명소를 공유하고 소통하며 동네를 꾸며가는 지역 커뮤니티 서비스"
        techStack="React, TypeScript, Vite, Tanstack Query, Styled-components, WebSocket, SSE"
        highlights={[
          "지도 기반 명소 등록 및 탐색 기능",
          "실시간 채팅 기능 (WebSocket)",
          "실시간 알림 기능 (SSE)",
        ]}
        links={[
          {
            icon: <VscBook className="text-2xl" />,
            label: "Notion",
            href: "https://www.notion.so/5419322a05534e0cb983aa37cd376eae?source=copy_link",
          },
          {
            icon: <VscGithubInverted className="text-2xl" />,
            label: "GitHub",
            href: "https://github.com/Dongnaebangnae/FE",
          },
        ]}
      />

      <ProjectCard
        title="핸디팜"
        roles={[
          { name: "기획", color: "bg-[#C2A500]/60 text-black" },
          { name: "프론트", color: "bg-[#17BBD8]/60 text-white" },
          { name: "백", color: "bg-[#D13D35]/60 text-white" },
        ]}
        period="2023.06.26 ~ 2023.08.07 (총6주)"
        teamInfo="FE 2인 / BE 3인"
        description="농업관련 정보제공 및 커뮤니티 기능을 통해 정보와 경험을 공유하고, 작물을 거래할 수 있는 종합 서비스 사이트"
        techStack="React, SCSS, Spring Boot, MySQL, JWT, Spring Security, EC2, S3, 소셜로그인, toss pay"
        highlights={[
          "실시간 날씨 정보 (기상청api)",
          "게시판, SNS형 일기 CRUD",
          "거래장터 결제 페이지(toss pay api)",
        ]}
        links={[
          {
            icon: <VscBook className="text-2xl" />,
            label: "Notion",
            href: "https://1roo.notion.site/1c75ff538a1a80658f53eba4492fbbe0",
          },
          {
            icon: <VscGithubInverted className="text-2xl" />,
            label: "GitHub",
            href: "https://github.com/orgs/HandiFarm/repositories",
          },
        ]}
      />
    </section>
  );
}
