import CareerCard from "../components/CareerCard";

export default function CareerPage() {
  return (
    <section
      id="career"
      className="flex flex-col items-center justify-center bg-[#303030] p-8 sm:p-16 text-base sm:text-lg"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">
        CAREER
      </h2>
      <div className="border border-gray-100 w-32 sm:w-44" />
      <div className="mb-8 mt-1 border border-gray-100 w-32 sm:w-44 h-2 bg-gray-100" />

      <div className="w-full max-w-5xl flex flex-col gap-12">
        <CareerCard
          logo="/assets/images/metabuild_logo.png"
          company="(주) 메타빌드"
          period="2022.08 ~ 2023.01 (6개월)"
          description="분산된 데이터를 지능적으로 연결·수집하고 연계·통합·품질관리하는 연계통합미들웨어 솔루션 업체"
          techStack={["Spring Boot"]}
          tasks={[
            "행정안전부 산하 차세대 지방인사시스템(인사랑) 내부 및 타 기관 대외연계 유지보수",
          ]}
        />

        <CareerCard
          logo="/assets/images/postechkorea_logo.png"
          company="(주) 포스텍코리아"
          period="2020.05 ~ 2022.09 (2년 5개월)"
          description="노동조합, 비영리단체 대상 ERP프로그램 및 전자투표 서비스 제공 업체"
          techStack={["CSS", "HTML"]}
          tasks={[
            "전자투표 웹앱 서비스 업무 총괄",
            "CSS, HTML 수정 등 간단한 디자인 업무 수행",
          ]}
        />
      </div>
    </section>
  );
}
