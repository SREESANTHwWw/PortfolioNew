import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiJest,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "Jest", icon: <SiJest className="text-red-500" /> },
  { name: "Git", icon: <FaGit className="text-orange-600" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-900 dark:text-white" />,
  },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-900 dark:text-white" />,
  },
];

const downloadResume =()=>{
    const link = document.createElement("a");
    link.href = "/Resume.pdf"
    link.download = "Resume.pdf"
    link.click()
}



const About = () => {
  return (
    <div className="w-full h-screen flex justify-center   sm:p-8 p-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-14 gap-7 max-w-6xl text-white">
        
        <div className="grid grid-cols-1 bg-black/70 rounded-2xl  ">
          <div className="  px-5 rounded-2xl ">
            <div className="flex justify-center mb-5 p-4 ">
              <h2 className="group text-4xl text-white font-semibold transition duration-300 font-Saira">About Me
                 <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </h2>
            </div>

            <p className="text-lg mb-4 font-Saira">
              I'm SREESANTH M, a passionate MERN Stack Developer with expertise
              in building modern web applications using MongoDB, Express.js,
              React, and Node.js. I love creating dynamic and responsive user
              interfaces that provide seamless user experiences.
            </p>
          </div>
          <div className="grid items-start h-20 p-6    ">
            <button className="w-full cursor-pointer sm:h-16 h-10 rounded-2xl bg-amber-50 text-black sm:text-2xl md:text-3xl text-xl font-Saira font-bold "
            onClick={downloadResume}>
              {" "}
              Resume{" "}
            </button>
          </div>
        </div>
          <div className="grid grid-cols-5 sm:grid-cols-4    sm:gap-10 gap-6 ">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ rotate: 360 }} // Rotation effect on click
              className="sm:w-20 w-16  sm:h-20 h-16 flex justify-center items-center  rounded-full bg-red-950 shadow-lg border border-gray-300 dark:border-gray-700 cursor-pointer transition-transform"
            >
              <div className="sm:text-4xl text-2xl">{skill.icon}</div>
            </motion.div>
          ))}
        </div>

      
      </div>
      
        
    </div>
  );
};

export default About;
