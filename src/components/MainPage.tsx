interface MainPageProps {
  mainRef: React.RefObject<HTMLElement | null>
}

export default function MainPage({ mainRef }: MainPageProps) {
  return (
    <section
      id="main"
      ref={mainRef}
      style={{ backgroundImage: "url('/assets/images/frontend_bg.png')" }}
      className="relative h-[50vh] flex flex-col gap-2 items-center justify-center bg-cover bg-top"
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 text-center text-white text-4xl font-bold">
        <h1 className="mb-2">하나래</h1>
        <h1>프론트엔드 개발자 포트폴리오</h1>
      </div>
      <div className="z-10 -mb-28 mt-5 text-xl text-white/80 flex flex-col items-center justify-end">
        <p>안녕하세요.</p>
        <p>사용자 경험을 가장 중시하는 개발자</p>
        <p>
          <span className="text-white font-bold">하나래</span>입니다.
        </p>
      </div>
    </section>
  )
}
