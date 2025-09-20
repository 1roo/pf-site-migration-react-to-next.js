import Image from "next/image";

export default function ArchivePage() {
  const archives = [
    {
      href: "https://github.com/1roo",
      img: "/assets/images/github.png",
      alt: "github 로고",
      title: "소스코드 저장소",
    },
    {
      href: "https://www.notion.so/X-26536a87500d80d98fcfd449dd265b9f?source=copy_link",
      img: "/assets/images/notion.png",
      alt: "notion 로고",
      title: "공부 및 지식 기록 블로그",
    },
  ];

  return (
    <section
      id="archive"
      className="flex flex-col items-center justify-center bg-[#303030] p-8 sm:p-16 text-base sm:text-lg"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">
        ARCHIVE
      </h2>
      <div className="border border-gray-100 w-32 sm:w-44" />
      <div className="mb-8 mt-1 border border-gray-100 w-32 sm:w-44 h-2 bg-gray-100" />

      {/* 카드 컨테이너 */}
      <div className="flex flex-wrap justify-center gap-10 mt-10 w-full max-w-6xl">
        {archives.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white p-6 w-[260px] sm:w-[300px] cursor-pointer block hover:shadow-lg transition text-center"
          >
            <Image
              className="mb-5 mx-auto"
              src={item.img}
              alt={item.alt}
              width={120}
              height={120}
            />
            <span className="block font-bold can-select">{item.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
