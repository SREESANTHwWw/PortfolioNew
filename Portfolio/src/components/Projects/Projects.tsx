import  { useState } from "react";

import { FaArrowCircleRight ,FaArrowCircleLeft  } from "react-icons/fa";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Dils Trades",
      description:
        "Dils Trades is a full-featured e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a seamless online shopping experience with user authentication, secure payment options, and robust product management features..",
      image1: "/Dils.png",
      image2: "/dils2.png",
      link: "https://dils-trades.onrender.com/",
    },
    {
      id: 2,
      title: "RettroFit",
      description:
        "Developed a web platform that provides reverse engineering solutions for obsolete, damaged, or unavailable machine parts. The project focuses on redesigning and manufacturing critical components when original manufacturers no longer produce them, solving challenges like missing technical drawings and urgent replacement needs",
      image1: "/rettro.png",
      image2: "/retto2.png",
      link: "https://rettrofit-fd.onrender.com/",
    },
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="w-full h-full flex justify-center  text-white">
      <div className="flex flex-col items-center gap-10 mt-20">
        <h2 className=" group text-4xl text-white transition duration-300 font-Saira font-semibold ">Projects

            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
        </h2>

        {/* Slider Container */}
        <div className="w-full max-w-7xl overflow-hidden relative  ">
          {/* Track */}
          <div
            className="flex transition-transform duration-500 "
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-full max-w-full grid sm:grid-cols-2 grid-cols-1 gap-8 p-6"
              >
                {/* Left: Details */}
                <div className="flex flex-col p-10 gap-10 ">
                  <div className="flex justify-between">
                    <h3 className="sm:text-3xl text-2xl font-bold mb-4 font-Saira">
                      {project.title}
                    </h3>

                    <button className="sm:w-32 w-20 sm:h-10 h-10 rounded-2xl bg-amber-50 text-black sm:text-xl  text-xl font-Saira font-bold ">
                      {" "}
                      <a href={project.link}>Vist</a>{" "}
                    </button>
                  </div>

                  <p className="text-white font-Saira">{project.description}</p>
                  <div className="flex justify-between   gap-6">
                    <button onClick={prev} className="">
                      <FaArrowCircleLeft size={22} />
                    </button>

                    <button onClick={next} className="">
                      <FaArrowCircleRight size={22} />
                    </button>
                  </div>
                </div>

                {/* Right: One Image */}
                {/* Right: Two Images (Top & Bottom) */}
                <div className="grid sm:grid-cols-1 grid-cols-1 gap-5">
                  <img
                    src={project.image1}
                    alt={project.title}
                    className="w-full sm:h-[250px]   object-cover rounded-lg"
                  />

                  <img
                    src={project.image2}
                    alt={project.title}
                    className="w-full  h-[250px] object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
