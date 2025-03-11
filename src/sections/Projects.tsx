import { Card } from "@/components/Card";
import { Fragment } from "react";

const projects = [
  {
    title: "Blog Website",
    description:
      "The blog site features advanced content management and real-time data processing, using Next.js APIs for optimal blog storage and retrieval. Integrating MongoDB for the backend and Tailwind CSS for the frontend improves security, responsiveness, and overall user experience.",
    skills: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "API Development",
      "Data Management",
      "Responsive Design",
    ],
  },
  {
    title: "AI-Powered Chat Application",
    description:
      "GG GPT features AI-driven interactions facilitated through React and the OpenAI API, delivering seamless user experiences without the need for account creation. This implementation ensures efficient response generation and robust usability, enhancing user engagement with cutting-edge AI technology.",
    skills: [
      "React",
      "OpenAI API",
      "AI Integration",
      "User Experience Design",
      "Responsive Design",
      "Frontend Development",
    ],
  },
  {
    title: "Web & App Development",
    description:
      "Developed a series of interactive web applications emphasizing user-centric design and front-end development. Projects include a Quiz app, Note app, Music player, Dice Game, Calculator, Stopwatch, and Simon Game, each designed to offer engaging and intuitive interactions.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "User Interface Design",
      "Frontend Development",
    ],
  },
  {
    title: "Educational App for Software Testing",
    description:
      "The platform features interactive tutorials and real-time simulations to teach software testing effectively. Enhanced with the .NET framework and a clean HTML/CSS interface, it offers optimized data management and improved scalability through a three-tier architecture.",
    skills: [
      ".NET",
      "HTML",
      "CSS",
      "Agile Project Management",
      "Software Architecture",
      "Testing and Quality Assurance",
    ],
  },
];

export const Projects = () => {
  return (
    <div className="py-16 ">
      <div className="container">
        <h2 className="uppercase tracking-widest text-center text-md md:text-xl">
          Projects
        </h2>
        <div className="mt-12 lg:mt-20 flex overflow-x-clip mask-image-[linear-gradient(to_right,transparent,rgba(0,0,0,0.2),rgba(0,0,0,9),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,1),rgba(0,0,0,9),transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:50s] sm:[animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) =>(
              <Fragment key={index}>
             {projects.map((project) => (
              <Card
                key={project.title}
                className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300 "
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl mt-2 font-medium text-sky-400 text-gradient">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base text-white/60">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 pb-0">
                  {project.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-3xl bg-sky-400 text-black text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
            </Fragment>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};
