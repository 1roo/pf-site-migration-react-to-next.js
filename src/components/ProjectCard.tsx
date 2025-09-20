import type { ReactNode } from "react";

interface ProjectRole {
  name: string;
  color: string;
}

interface ProjectLink {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface ProjectCardProps {
  title: string;
  roles: ProjectRole[];
  period: string;
  teamInfo: string;
  description: string;
  techStack: string;
  highlights?: string[];
  links?: ProjectLink[];
}

export default function ProjectCard({
  title,
  roles,
  period,
  teamInfo,
  description,
  techStack,
  highlights = [],
  links = [],
}: ProjectCardProps) {
  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-10 w-full sm:w-4/5 max-w-3xl mb-8">
      {/* 제목 + 역할 + 팀 */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between pb-4 border-b border-b-black gap-3">
        {/* 제목 + 역할 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="inline-block bg-[#237031]/60 text-white rounded-lg px-3 py-1 font-bold text-lg sm:text-2xl">
            {title}
          </span>
          <div>
            <div className="flex flex-wrap gap-1 mt-1 sm:mt-0">
              {roles.map((role, i) => (
                <span
                  key={i}
                  className={`inline-block text-xs sm:text-sm rounded-md px-2 py-0.5 ${role.color}`}
                >
                  {role.name}
                </span>
              ))}
            </div>
            <span className="block text-xs sm:text-sm mt-1">{period}</span>
          </div>
        </div>
        {/* 팀 정보 */}
        <span className="text-xs sm:text-sm text-gray-700">{teamInfo}</span>
      </div>

      {/* 설명 */}
      <p className="my-4 font-bold text-sm sm:text-base">{description}</p>

      {/* 하이라이트 */}
      <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
        {highlights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* 기술 스택 */}
      <div className="border border-[#447346] bg-[#BFFDCA]/45 rounded-lg p-3 sm:p-4 my-4 text-sm sm:text-base">
        <span>{techStack}</span>
      </div>

      {/* 링크/버튼 */}
      {links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4">
          {links.map((link, i) =>
            link.onClick ? (
              <button
                key={i}
                onClick={link.onClick}
                className="flex items-center border border-black rounded-lg px-3 py-2 text-sm sm:text-base font-bold cursor-pointer hover:bg-gray-100"
              >
                {link.icon}
                <span className="ml-2 can-select">{link.label}</span>
              </button>
            ) : (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-black rounded-lg px-3 py-2 text-sm sm:text-base font-bold cursor-pointer hover:bg-gray-100"
              >
                {link.icon}
                <span className="ml-2 can-select">{link.label}</span>
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}
