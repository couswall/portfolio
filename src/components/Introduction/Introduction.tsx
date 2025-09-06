import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrDownload } from "react-icons/gr";
import { INTRODUCTION } from "@components/Introduction/Introduction.constants";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="w-full px-[4%] md:px-[12%] scroll-mt-44 text-center mx-auto mb-3"
    >
      <div className="flex flex-col gap-5 items-center justify-center">
        {/* IMAGE */}
        <div className="relative w-60 h-60 rounded-full overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            fill
            className="object-cover object-[10%_25%]"
          />
        </div>
        <h2 className="text-2xl dark:text-white">{INTRODUCTION.GREETING}</h2>
        <h1 className="text-6xl dark:text-white">{INTRODUCTION.FULLSTACK}</h1>
        <p className="dark:text-white">{INTRODUCTION.PROFILE_DESCRIPTION}</p>

        {/* SOCIAL MEDIA */}
        <div className="flex flex-wrap gap-4">
          <a
            href={"https://github.com/couswall"}
            target="_blank"
            className="p-2 border-2 border-black rounded-full hover:scale-125 hover:-translate-y-1 hover:rotate-45 hover:border-gray-900 transition duration-500 dark:border-gray-200 hover:dark:border-white"
          >
            <FaGithub className="dark:text-white text-2xl" />
          </a>
          <a
            href={"https://www.linkedin.com/in/andre-ignorosa/"}
            target="_blank"
            className="p-2 border-2 border-black rounded-full hover:scale-125 hover:-translate-y-1 hover:rotate-45 hover:border-gray-900 transition duration-500 dark:border-gray-200 hover:dark:border-white"
          >
            <FaLinkedin className="dark:text-white text-2xl" />
          </a>
        </div>

        {/* CONTACT BUTTONS */}
        <div className="flex flex-col gap-4 md:flex-row items-center mt-4">
          <button className="cursor-pointer px-8 py-3 border-2 rounded-2xl flex flex-row w-52 items-center justify-center gap-3 hover:shadow-2xl hover:-translate-y-1 transition duration-500 bg-black text-white dark:bg-transparent">
            {"Contact me"}
            <MdOutlineMailOutline className="text-2xl" />
          </button>
          <button className="cursor-pointer px-8 py-3 border-2 rounded-2xl flex flex-row w-52 hover:shadow-2xl hover:-translate-y-1 transition duration-500 border-gray-500 items-center justify-center gap-3 font-semibold dark:bg-white dark:text-black">
            {"Resume"}
            <GrDownload className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
