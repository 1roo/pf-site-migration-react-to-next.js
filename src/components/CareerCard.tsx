import Image from "next/image";

interface CareerCardProps {
  logo: string;
  company: string;
  period: string;
  description: string;
  techStack: string[];
  tasks: string[];
}

export default function CareerCard({
  logo,
  company,
  period,
  description,
  techStack,
  tasks,
}: CareerCardProps) {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:items-stretch my-8">
      {/* 로고 */}
      <div className="flex justify-center items-start sm:items-center w-full sm:w-[200px]">
        <Image
          src={logo}
          alt={`${company} 로고`}
          width={200}
          height={200}
          className="w-28 h-28 sm:w-[160px] sm:h-[160px] object-contain"
        />
      </div>

      {/* 세로 구분선 (PC만 보임) */}
      <div className="hidden sm:block bg-gray-400 w-[2px] mx-10" />

      {/* 상세 내용 */}
      <div className="flex-1 flex flex-col justify-start gap-2">
        <h3 className="font-bold text-white text-lg sm:text-xl">{company}</h3>
        <p className="text-xs sm:text-sm text-[#9C9C9C]">{period}</p>
        <p className="text-xs sm:text-sm text-[#9C9C9C]">{description}</p>

        {/* 기술 스택 */}
        <div className="flex gap-2 my-3 flex-wrap">
          {techStack.map((stack, idx) => (
            <span
              key={idx}
              className="inline-block px-2 py-1 bg-[#FFFFFF]/80 rounded-md text-xs sm:text-base font-semibold"
            >
              {stack}
            </span>
          ))}
        </div>

        {/* 주요 업무 */}
        <ul className="list-disc list-inside text-xs sm:text-base text-[#9C9C9C] space-y-1">
          {tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
