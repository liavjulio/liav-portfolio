/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-xl mt-10">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">Contact</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Feel free to reach out via email or LinkedIn. I'm always open to collaboration,
        freelance work, or just talking tech!
      </p>

      <div className="flex flex-col items-center space-y-6">
        <a href="mailto:liavjulio7@gmail.com" className="flex items-center text-blue-600 hover:underline text-lg">
          <FaEnvelope className="mr-2 text-gray-700" /> liavjulio7@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/liav-huli-software-cpp-c-html-javascript-css-java/" target="_blank" className="flex items-center text-blue-600 hover:underline text-lg">
          <FaLinkedin className="mr-2 text-gray-700" /> LinkedIn Profile
        </a>
      </div>
    </main>
  );
}