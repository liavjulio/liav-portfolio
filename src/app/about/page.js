/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-xl mt-10">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">About Me</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        I’m <strong className="text-black">Liav Huli</strong>, a dedicated software engineer with a passion for building scalable backend systems,
        developing real-time web applications, and diving deep into game development and IoT innovation.
        I’m currently completing my B.Sc. in Software Engineering at Shamoon College of Engineering.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        My experience spans across DevOps, CI/CD, cloud infrastructure (AWS), and modern web frameworks like React, Node.js,
        and Flask. I enjoy integrating advanced tools like Docker, Kubernetes, and RabbitMQ to bring systems to life with a
        focus on performance, security, and reliability.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        I’m especially passionate about game development using Unity, blending creativity and engineering to design interactive
        experiences. I'm currently building a match-3 style game (Candy Crush clone) as part of my personal portfolio.
      </p>
    </main>
  );
}