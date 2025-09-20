import Image from "next/image";

export default function SkillsPage() {
  const categories = [
    {
      icon: "/assets/images/language.png",
      alt: "프로그램언어 이미지",
      title: "LANGUAGE",
      skills: [
        { name: "TypeScript", color: "bg-[#2F74C0] text-white" },
        { name: "JavaScript", color: "bg-[#EFD81D] text-black" },
        { name: "Java", color: "bg-[#D13D35] text-white" },
      ],
    },
    {
      icon: "/assets/images/frontend.png",
      alt: "프론트엔드 이미지",
      title: "FRONTEND",
      skills: [
        { name: "React", color: "bg-[#61DAFB] text-white" },
        { name: "Next.js", color: "bg-[#000000] text-white" },
        { name: "Zustand", color: "bg-[#49443E] text-white" },
        { name: "React-Query", color: "bg-[#FF4260] text-white" },
        { name: "React-Hook-Form", color: "bg-[#000000] text-white" },
        { name: "SCSS", color: "bg-[#CE6B9C] text-white" },
        { name: "Tailwind CSS", color: "bg-[#38BDF8] text-white" },
        { name: "Vite", color: "bg-[#8869EE] text-white" },
      ],
    },
    {
      icon: "/assets/images/backend.png",
      alt: "백엔드 이미지",
      title: "BACKEND",
      skills: [
        { name: "Spring (Boot)", color: "bg-[#6DB33F] text-white" },
        { name: "Node.js", color: "bg-[#339933] text-white" },
        { name: "Express.js", color: "bg-[#000000] text-white" },
      ],
    },
    {
      icon: "/assets/images/devops.png",
      alt: "DevOps 이미지",
      title: "DEVOPS",
      skills: [
        { name: "Docker", color: "bg-[#2468EE] text-white" },
        { name: "AWS (EC2, S3)", color: "bg-[#F79B26] text-white" },
        { name: "Vercel", color: "bg-[#000000] text-white" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-[#237031]/60 p-8 sm:p-16 text-base sm:text-lg"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">
        SKILLS
      </h2>
      <div className="border border-gray-100 w-32 sm:w-44" />
      <div className="mb-8 mt-1 border border-gray-100 w-32 sm:w-44 h-2 bg-gray-100" />

      <div className="bg-[#EEEEEE]/80 rounded-lg py-6 sm:py-10 shadow-lg px-4 sm:px-10 w-full max-w-4xl space-y-8">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
          >
            <div className="flex items-center min-w-[180px]">
              <Image src={cat.icon} alt={cat.alt} width={60} height={40} />
              <span className="ml-3 font-bold">{cat.title}</span>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cat.skills.map((s, i) => (
                <span
                  key={i}
                  className={`${s.color} px-3 py-1 rounded-md text-sm sm:text-base`}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
