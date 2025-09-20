import { FaRegIdBadge, FaRegCalendarAlt, FaPhone } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

export default function AboutMePage() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center bg-[#EEEEEE] p-16 text-lg"
    >
      <h2 className="text-3xl font-semibold">ABOUT ME</h2>
      <div className="border border-black w-44" />
      <div className="mb-10 mt-1 border border-black w-44 h-2 bg-black" />
      <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-5 md:gap-y-20">
        <div className="flex items-center">
          <FaRegIdBadge className="text-3xl" />
          <span className="ml-4">하나래</span>
        </div>
        <div className="flex items-center">
          <FaRegCalendarAlt className="text-3xl" />
          <span className="ml-4">1993.02.11</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-2xl" />
          <span className="ml-5">010-4207-4211</span>
        </div>
        <div className="flex items-center">
          <MdOutlineMailOutline className="text-3xl" />
          <a
            href="mailto:93hanaru@gmail.com"
            className="ml-4 hover:text-blue-950 hover:underline"
          >
            93hanaru@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <IoLocationOutline className="text-3xl" />
          <span className="ml-4">서울특별시 용산구</span>
        </div>
        <div className="flex items-center">
          <GiGraduateCap className="text-3xl" />
          <span className="ml-4">한성대학교 경영학부</span>
        </div>
      </div>
    </section>
  );
}
