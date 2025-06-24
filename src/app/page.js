/* eslint-disable react/no-unescaped-entities */
"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaCode, FaServer, FaCloud } from "react-icons/fa";
import {
  FaAws,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Home() {
  const [view, setView] = useState("work");
  const projects = [
    {
      title: "BikeSafe",
      description: [
        "**Capstone Project**: Flutter IoT app for real-time bike safety.",
        "ESP8266 → MQTT → Firebase for live location & speed data.",
        "Push notifications on safety alerts, and secure REST APIs.",
      ],
      link: "https://github.com/liavjulio/BikeSafe",
    },
    {
      title: "Flask-OpenAI",
      description: [
        "Flask API integrating OpenAI for NLP endpoints.",
        "Dockerized with PostgreSQL persistence and Pytest tests.",
        "CI/CD via GitHub Actions with production-grade error handling.",
      ],
      link: "https://github.com/liavjulio/Flask-openai",
    },
    {
      title: "Flight Assignment",
      description: [
        "University DevOps capstone: flight booking microservices.",
        "CI/CD pipelines built with GitHub Actions & Docker.",
        "Kubernetes deployment on AWS EKS using Helm charts.",
      ],
      link: "https://github.com/liavjulio/flight-assignment",
    },
    {
      title: "Automation Project",
      description: [
        "Python automation scripts for data parsing & reporting.",
        "Built logging, scheduling, and email notifications.",
        "Packaged as a CLI tool and published to PyPI.",
      ],
      link: "https://github.com/liavjulio/automation_project",
    },
    {
      title: "Cars-Client",
      description: [
        "React front-end for the Cars social platform with JWT-secured login flows.",
        "Interactive map using Leaflet to display live vehicle locations.",
        "Responsive UI styled with Tailwind CSS and optimized via code-splitting.",
      ],
      link: "https://github.com/project-managment-g8/Cars-Client",
    },
    {
      title: "Cars-Server",
      description: [
        "Node.js + Express REST API backing the Cars platform.",
        "MongoDB schemas with Mongoose for user, vehicle, and trip data.",
        "Real-time updates via Socket.IO and structured error-handling middleware.",
      ],
      link: "https://github.com/project-managment-g8/Cars-Server",
    },
  ];
  const workExperience = [
    {
      title: "Fighter Commander",
      company: "Israel Defense Forces",
      period: "2017 – 2020",
      description:
        "Led and trained combat units in high-stress environments, developed leadership skills, and managed strategic mission planning.",
    },
    {
      title: "Platoon commander (Reserves)",
      company: "IDF Unit 8553",
      period: "2020 – Present",
      description:
        "Coordinate and guide reserve platoon operations, Manage training exercises, and ensure operational readiness.",
    },
    {
      title: "Volunteer Mentor",
      company: "FIDF IMPACT!",
      period: "2022 – Present",
      description:
        "Mentored disadvantaged youth, providing guidance on personal development and IDF readiness.",
    },
  ];

  const educationData = [
    {
      title: "B.Sc. in Software Engineering",
      institution: "Shamoon College of Engineering",
      period: "Jan 2021 – Oct 2025",
      description: [
        "Comprehensive coursework in Data Structures, Algorithms, and System Design.",
        "Developed “Social Cars” full-stack app for car enthusiasts using React, Node.js, and MongoDB.",
        "Created “BikeSafe” Flutter IoT app leveraging MQTT, GPS, and Firebase for real-time tracking.",
        "Led capstone DevOps assignment: Flight booking site with CI/CD, tests, and Kubernetes deployment.",
      ],
    },
    {
      title: "Professional Courses",
      institution: "Udemy",
      period: "2024 – 2025",
      description: [
        "AWS Certified Solutions Architect – Designed and deployed cloud-native applications on AWS (EC2, S3, Lambda).\n",
        "The Web Developer Bootcamp – Mastered HTML5, CSS3 (Flex/Grid), JavaScript ES6+, Node.js and RESTful APIs.\n",
        "Flutter & Dart – Built cross-platform mobile apps with Firebase authentication, state management and CI/CD pipelines.",
      ],
    },
  ];

  return (
    <div className="bg-[#0D1117] text-white font-sans scroll-smooth">
      <Head>
        <title>Liav Huli | Software Portfolio</title>
      </Head>

      {/* Navigation */}
      <nav className="w-full sticky top-0 z-50 bg-[#0D1117] border-b border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Liav Huli</h1>
          <div className="space-x-6 text-gray-300 text-sm">
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
            <a href="#experience" className="hover:text-blue-400">
              Experience
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
            <Link href="/LiavHuliCV.pdf" className="hover:text-blue-400">
              CV
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-extrabold mb-4">
          I&apos;m<span className="text-blue-500"> Liav Huli</span>
        </h2>
        <p className="text-xl text-gray-300">Junior Software Engineer</p>
        <p className="text-lg text-blue-400 mt-2">Made In IMPACT!</p>
        <p className="max-w-2xl mx-auto mt-6 text-gray-400">
          Passionate about building interactive apps, full-stack systems, and
          game mechanics. Focused on DevOps, scalable architecture, and seamless
          user experiences.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/liavjulio"
            className="bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-md text-sm flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/liav-huli-software-cpp-c-html-javascript-css-java/"
            className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-md text-sm flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <Link
            href="#projects"
            className="bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-md text-sm"
          >
            View Projects
          </Link>
        </div>

        <div className="mt-12 animate-bounce">
          <FaChevronDown className="text-gray-500 text-2xl mx-auto" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#161B22] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="p-6 bg-[#0D1117] border border-gray-800 rounded-lg shadow-lg transform transition hover:scale-105"
              >
                <h3 className="text-2xl font-semibold mb-3">{proj.title}</h3>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
                  {proj.description.map((line, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: line }} />
                  ))}
                </ul>
                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm hover:underline"
                  >
                    View on GitHub
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">
                    Private Repository
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">
          Technical Skills
        </h2>
        <p className="text-center text-gray-400 mb-12">
          My expertise spans across various technologies, enabling me to build
          comprehensive full-stack solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Card */}
          <div className="relative group p-6 rounded-2xl bg-[#1f2430]/60 backdrop-blur-md shadow-lg transform transition duration-300 hover:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#212836] p-2 rounded-full shadow-md">
              <FaCode className="text-blue-400 text-xl" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white text-center">
              Frontend Development
            </h3>
            <div className="mt-6 grid grid-cols-4 gap-4 justify-items-center text-2xl">
              <span
                title="HTML5"
                className="inline-block cursor-pointer text-orange-500"
              >
                <SiHtml5 />
              </span>
              <span
                title="CSS3"
                className="inline-block cursor-pointer text-blue-500"
              >
                <SiCss3 />
              </span>
              <span
                title="JavaScript"
                className="inline-block cursor-pointer text-yellow-400"
              >
                <SiJavascript />
              </span>
              <span
                title="TypeScript"
                className="inline-block cursor-pointer text-sky-400"
              >
                <SiTypescript />
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 justify-items-center text-2xl">
              <span
                title="React"
                className="inline-block cursor-pointer text-cyan-400"
              >
                <FaReact />
              </span>
              <span
                title="Tailwind CSS"
                className="inline-block cursor-pointer text-teal-400"
              >
                <SiTailwindcss />
              </span>
            </div>
          </div>

          {/* Backend Card */}
          <div className="relative group p-6 rounded-2xl bg-[#243041]/60 backdrop-blur-md shadow-lg transform transition duration-300 hover:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1e2a38] p-2 rounded-full shadow-md">
              <FaServer className="text-green-400 text-xl" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white text-center">
              Backend Development
            </h3>
            <div className="mt-6 grid grid-cols-4 gap-4 justify-items-center text-2xl">
              <span
                title="Node.js"
                className="inline-block cursor-pointer text-green-500"
              >
                <FaNodeJs />
              </span>
              <span
                title="PostgreSQL"
                className="inline-block cursor-pointer text-blue-700"
              >
                <SiPostgresql />
              </span>
              <span
                title="MongoDB"
                className="inline-block cursor-pointer text-green-600"
              >
                <SiMongodb />
              </span>
              <span
                title="Python"
                className="inline-block cursor-pointer text-blue-400"
              >
                <FaPython />
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 justify-items-center text-2xl">
              <span
                title="Java"
                className="inline-block cursor-pointer text-red-600"
              >
                <FaJava />
              </span>
              <span
                title="Kubernetes"
                className="inline-block cursor-pointer text-blue-300"
              >
                <SiKubernetes />
              </span>
            </div>
          </div>

          {/* DevOps Card */}
          <div className="relative group p-6 rounded-2xl bg-[#1d2b36]/60 backdrop-blur-md shadow-lg transform transition duration-300 hover:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#21303a] p-2 rounded-full shadow-md">
              <FaCloud className="text-blue-500 text-xl" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white text-center">
              DevOps & Cloud
            </h3>
            <div className="mt-6 grid grid-cols-3 gap-4 justify-items-center text-2xl">
              <span
                title="Docker"
                className="inline-block cursor-pointer text-blue-600"
              >
                <FaDocker />
              </span>
              <span
                title="Kubernetes"
                className="inline-block cursor-pointer text-blue-300"
              >
                <SiKubernetes />
              </span>
              <span
                title="AWS"
                className="inline-block cursor-pointer text-orange-400"
              >
                <FaAws />
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 justify-items-center text-2xl">
              <span
                title="Tailwind CSS"
                className="inline-block cursor-pointer text-teal-400"
              >
                <SiTailwindcss />
              </span>
              <span
                title="GitHub Actions"
                className="inline-block cursor-pointer text-gray-500"
              >
                <FaGithub />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-6 py-20 bg-[#1a1f28]"
      >
        <div className="text-center mb-12">
          {/* <span className="inline-block px-4 py-1 bg-blue-600 rounded-full text-sm uppercase">My Journey</span> */}
          <h2 className="text-4xl font-bold mt-4">Experience & Education</h2>
          <p className="text-gray-400 mt-2">
            My professional journey and academic background that shaped my
            skills.
          </p>
          <div className="mt-6 inline-flex rounded-md bg-[#161b22]">
            <button
              onClick={() => setView("work")}
              className={`px-5 py-2 font-medium ${
                view === "work"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setView("education")}
              className={`px-5 py-2 font-medium ${
                view === "education"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Education
            </button>
          </div>
        </div>
        <div className="space-y-6">
          {(view === "work" ? workExperience : educationData).map(
            (item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0d1117] border border-gray-800 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-gray-400 text-sm">{item.period}</span>
                </div>
                <h4 className="text-gray-300 text-sm mb-2">
                  {item.company || item.institution}
                </h4>

                {Array.isArray(item.description) ? (
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    {item.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm">{item.description}</p>
                )}
              </div>
            )
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#161B22] py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-lg text-gray-400 mb-6">
            Let&apos;s connect! Whether it's a new project, freelance work, or
            collaboration, reach out below.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:liavjulio7@gmail.com"
              className="flex items-center gap-2 text-blue-400 hover:underline text-lg"
            >
              <FaEnvelope /> liavjulio7@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/liav-huli-software-cpp-c-html-javascript-css-java/"
              className="flex items-center gap-2 text-blue-400 hover:underline text-lg"
              target="_blank"
            >
              <FaLinkedin /> LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-[#0D1117]">
        &copy; {new Date().getFullYear()} Liav Huli. All rights reserved.
      </footer>
    </div>
  );
}
