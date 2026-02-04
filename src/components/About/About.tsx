"use client";
import React from "react";
import Image from "next/image";
import { FiCode, FiCoffee, FiTarget, FiZap } from "react-icons/fi";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";

const highlights = [
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: FiZap,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks",
  },
  {
    icon: FiTarget,
    title: "Problem Solver",
    description: "Finding efficient solutions to complex challenges",
  },
  {
    icon: FiCoffee,
    title: "Team Player",
    description: "Collaborating effectively in agile environments",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full scroll-mt-20 py-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl px-6 md:px-12 mx-auto">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get To Know Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A passionate developer dedicated to creating impactful digital experiences
              </p>
            </div>
          </ScrollReveal>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <ScrollReveal variant="fade-right">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-violet-500/20 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-violet-500/10 rounded-full -z-10" />

                {/* Main image container */}
                <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent z-10" />
                  <Image
                    src="/programmer-avatar.png"
                    alt="About me"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Text Side */}
            <ScrollReveal variant="fade-left">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Full Stack Developer based in{" "}
                  <span className="text-violet-600 dark:text-violet-400">
                    Your Location
                  </span>
                </h3>

                <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    I&apos;m a passionate Full Stack Developer with a strong foundation in
                    modern web technologies. I love turning complex problems into simple,
                    beautiful, and intuitive solutions.
                  </p>
                  <p>
                    With experience in both frontend and backend development, I enjoy
                    working on projects from conception to deployment. I&apos;m constantly
                    learning and exploring new technologies to stay at the forefront of
                    web development.
                  </p>
                  <p>
                    When I&apos;m not coding, you can find me exploring new technologies,
                    contributing to open-source projects, or enjoying a good cup of coffee
                    while brainstorming new ideas.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                      3+
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                      20+
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                      10+
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {highlights.map((item, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 100}>
                <div className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
