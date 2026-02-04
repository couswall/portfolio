"use client";
import React, { useState } from "react";
import { FiSend, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/90 dark:to-gray-800/50"
    >
      <div className="max-w-7xl px-6 md:px-12 mx-auto">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <ScrollReveal variant="fade-right" className="lg:col-span-2">
              <div className="flex flex-col gap-6 h-full">
                {/* Info Cards */}
                <div className="flex flex-col gap-4">
                  {/* Email */}
                  <div className="group p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                        <FiMail className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Email
                        </p>
                        <a
                          href="mailto:andre@example.com"
                          className="text-gray-900 dark:text-white font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                        >
                          andre@example.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="group p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                        <FiMapPin className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Location
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                          Available Worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-auto pt-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/couswall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/andre-ignorosa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal variant="fade-left" className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full px-6 py-4 rounded-xl flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Send Message
                      <FiSend className="text-lg" />
                    </button>
                  </div>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
