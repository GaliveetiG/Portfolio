import React from "react";
import Image from "next/image";
import reactimg from "@/assets/images/react.png";
import htmlimg from "@/assets/images/html.png";
import cssimg from "@/assets/images/css.png";
import jsimg from "@/assets/images/js.png";
import tsimg from "@/assets/images/ts.png";
import tailwindcssimg from "@/assets/images/tailwindcss.png";
import bootstrapimg from "@/assets/images/bootstrap.png";
import figmaimg from "@/assets/images/figma.png";
import nextjsimg from "@/assets/images/nextjs.png";
import chromeimg from "@/assets/images/chromedev.png";
import polypaneimg from "@/assets/images/polypane.png";
import javaimg from "@/assets/images/java.png";
import pythonimg from "@/assets/images/python.png";
import nodeimg from "@/assets/images/node-js.png";
import restimg from "@/assets/images/RestApi.png";
import mongodbimg from "@/assets/images/mongodb.png";
import mysqlimg from "@/assets/images/mysql.png";
import jupyterimg from "@/assets/images/jupiter.png";
import vscodeimg from "@/assets/images/vscode.png";
import postmanimg from "@/assets/images/postman.png";
import thunderimg from "@/assets/images/thunder.png";
import sqlimg from "@/assets/images/SQL.png";
import expressImg from "@/assets/images/express.png"
import awsimg from "@/assets/images/awsconsole.png";
import gitimg from "@/assets/images/github.png";
import tensorflowimg from "@/assets/images/tensorflow.png";
import opencvimg from "@/assets/images/opencv.png";
import agileimg from "@/assets/images/agile.png";
import mlimg from "@/assets/images/ml.png";
import dsimg from "@/assets/images/dsa.png";
import docker from "@/assets/images/docker.png";
import spring from "@/assets/images/spring.png"
import { Card } from "@/components/Card";

export const skills = [
  {
    technology: "Frontend",
    skills: [
      { name: "React", image: reactimg, width: 80, height: 80 },
      { name: "HTML", image: htmlimg, width: 80, height: 80 },
      { name: "CSS", image: cssimg, width: 80, height: 80 },
      { name: "JavaScript", image: jsimg, width: 65, height: 65 },
      { name: "TypeScript", image: tsimg, width: 80, height: 80 },
      { name: "Tailwind CSS", image: tailwindcssimg, width: 80, height: 80 },
      { name: "Bootstrap", image: bootstrapimg, width: 80, height: 80 },
      { name: "Next.js", image: nextjsimg, width: 80, height: 80 },
      { name: "Express", image: expressImg, width: 80, height: 80 },
    ],
  },
  {
    technology: "Backend",
    skills: [
      { name: "Java", image: javaimg, width: 80, height: 80 },
      { name: "Python", image: pythonimg, width: 80, height: 80 },
      { name: "spring", image: spring, width: 80, height: 80},
      { name: "Node.js", image: nodeimg, width: 80, height: 80 },
      { name: "REST APIs", image: restimg, width: 80, height: 80 },
      { name: "MongoDB", image: mongodbimg, width: 40, height: 40 },
      { name: "MySQL", image: mysqlimg, width: 80, height: 80 },
      { name: "SQL", image: sqlimg, width: 80, height: 80 },
      { name: "Jupiter Notebook", image: jupyterimg, width: 80, height: 80 },
      { name: "Visual Studio Code", image: vscodeimg, width: 80, height: 80 },
      { name: "Postman", image: postmanimg, width: 80, height: 80 },
      { name: "Thunder Client", image: thunderimg, width: 80, height: 80 },
    ],
  },
  {
    technology: "Cloud/Other",
    skills: [
      { name: "AWS Console", image: awsimg, width: 80, height: 80 },
      { name: "Git", image: gitimg, width: 80, height: 80 },
      { name: "TensorFlow", image: tensorflowimg, width: 80, height: 80 },
      { name: "OpenCV", image: opencvimg, width: 80, height: 80 },
      { name: "Agile Methodology", image: agileimg, width: 80, height: 80 },
      { name: "Docker", image: docker, width: 80, height: 80 },
      { name: "Machine Learning", image: mlimg, width: 80, height: 80 },
      {name: "Data Structures and Algorithms",image: dsimg,width: 80,height: 80,},
      { name: "Figma", image: figmaimg, width: 80, height: 80 },
      { name: "Chrome Dev Tools", image: chromeimg, width: 80, height: 80 },
      { name: "Polypane", image: polypaneimg, width: 80, height: 80 },
    ],
  },
];

export const About = () => {
  return (
    <section className="py-14.3">
      <div className="container mx-auto p-4">
        <h2 className="uppercase tracking-widest text-center text-md md:text-xl">
          About
        </h2>
        <p className="text-center justify-center md:text-lg text-white/60 mt-4  ">
        My journey began with curiosity: how do things work behind the screen? That spark led me to explore both design and development, where I found a deep passion for building meaningful digital experiences. Whether coding late into the night or drawing parallels between creativity in cooking and clean code, I’ve always been fueled by the joy of learning and creating.

        From college projects to professional roles at companies like Airbnb and Uber, each step has shaped my mindset — one that values clarity, purpose, and impact. I believe in tech that not only works, but connects. Today, I continue that journey, inspired by every new challenge, and committed to crafting solutions that are as thoughtful as they are powerful. </p>
        <h2 className="text-md md:text-xl text-center mt-8">TOOLS & TECHNOLOGIES</h2>
        <div className="mt-10 md:mt-18 flex flex-col gap-20">
          {skills.map((about, aboutIndex) => (
            <Card key={about.technology} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16" 
            style={{
              top: `calc(64px + ${aboutIndex * 40}px)`,
            }}
            >
              <div className="flex justify-center flex-wrap">
                {about.skills.map((skill) => (
                  <div key={skill.name} className="p-2">
                    <Image
                      className="rounded-md bg-gray-800 "
                      src={skill.image}
                      alt={skill.name}
                      width={60}
                      height={60}
                      layout="fixed"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-xl mt-2 md:mt-5 text-center font-medium text-sky-400 text-gradient">
                {about.technology}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
