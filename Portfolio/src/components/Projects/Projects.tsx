import { useState } from "react";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Dils Trades",
      description:
        "Dils Trades is a full-featured e-commerce web application built using the MERN stack, designed to deliver a seamless and secure online shopping experience. The platform includes robust user authentication with JWT, a complete product management system for adding, updating, and controlling inventory, and an intuitive shopping cart with order processing and integrated payment options. Users can manage their profiles, track orders, and browse products through advanced search and filtering features, while administrators benefit from a powerful dashboard to manage products, users, and orders efficiently. With a fully responsive React interface, optimized Express.js APIs, and secure MongoDB data handling, Dils Trades demonstrates strong full-stack development skills, modern UI design, and scalable application architecture suitable for real-world e-commerce solutions.",
      image1: "/Dils.png",
      image2: "/dils2.png",
      link: "https://dils-trades.onrender.com/",
    },
    {
      id: 2,
      title: "RettroFit",
      description:
        "RettroFit is a specialized web platform developed to provide reverse engineering solutions for obsolete, damaged, or unavailable machine parts. The system enables industries to redesign and reproduce critical components when original manufacturers no longer support them, effectively addressing issues such as missing technical drawings, unavailable spare parts, and urgent replacement demands. RettroFit streamlines the process by collecting detailed part information, enabling engineers to analyze, redesign, and deliver accurate, manufacturable models, ensuring minimal downtime and improved operational efficiency for clients.",
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
        <h2 className=" group text-4xl text-white transition duration-300 font-Saira font-semibold ">
          Projects
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
                <div className="flex flex-col p-10 gap-10 bg-black/70 rounded-2xl ">
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
                <div className="grid sm:grid-cols-1 grid-cols-1 gap-5 ">
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
