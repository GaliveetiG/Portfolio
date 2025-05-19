"use client";
import { Card } from "@/components/Card";
import {motion} from 'framer-motion';
import React, { useRef } from 'react';

const experience = [
    {
       title: "Software Developer",
       company: "Uber",
       period: "Present",
       description: "At Uber, I work as a Software Developer, building real-time dashboards with React.js and Spring Boot to improve driver performance tracking. I develop RESTful and GraphQL APIs, manage CI/CD pipelines using Jenkins, Docker, and Kubernetes, and deploy scalable services on AWS. I also optimize MySQL and MongoDB for high-volume data handling. Additionally, I implement monitoring using CloudWatch and ELB for high availability and ensuring system reliability.",
       skills: ["React.js", "TypeScript", "Java", "Spring Boot", "RESTful APIs", "GraphQL", "Jenkins", "Docker", "Kubernetes", "AWS", "MySQL", "MongoDB", "Agile", "Microservices", "CI/CD"],
    },
    {
        title: "Software Developer",
        company: "AirBnb",
        period: "Dec 2021 - Dec 2022",
        description:" At Airbnb, I built 20+ reusable UI components with React.js, TS and Redux Toolkit to improve performance and responsiveness. I developed and deployed scalable APIs using Spring Boot and Node.js, and integrated Elasticsearch to enhance search efficiency. I automated CI/CD pipelines with GitHub Actions, Jenkins, and Docker, and strengthened app security using OAuth 2.0 and JWT. I also improved async data handling and collaborated with designers to revamp user onboarding.",
        skills: ["React", "TypeScript", "Redux Toolkit", "Redux Saga", "React Query", "Context API","Java", "Spring Boot", "Node.js", "GitHub Actions", "Jenkins", "Docker", "Elasticsearch", "LaunchDarkly", "OAuth 2.0", "JWT", "Agile", "UI/UX Collaboration", "CI/CD"],
    },
    {
        title: "Machine Learning Engineer - Internship",
        company: "Pragyan-AI",
        period: "Jun 2021 - Nov 2021",
        description: "Developed a TensorFlow-based fall detection system using real-time image and video analysis to enhance safety for the elderly and individuals with disabilities. Demonstrated adaptability and creative problem-solving in a fast-paced startup environment, contributing to a project with significant social impact. Continuously expanded my machine learning expertise, applying cutting-edge techniques to practical challenges in health and wellness.",
        skills: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "Machine Learning", "Image and Video Analysis", "Jupyter Notebook", "Data Preprocessing"],
    },
];

export const Experience = () => {
  const constraintsRef = useRef(null);
    return (
 <div className="py-15.8">
    <div className="container">
  <div className="uppercase tracking-widest text-center text-md md:text-xl">Experience</div> 

  <div className="mt-20 flex flex-col gap-8">
  <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-4">
  <Card 
  className="sm:h-auto md:h-auto lg:h-[320px] md:col-span-3 transform hover:rotate-2 rotate-0 transition duration-300 ease-in-out hover:shadow-[0_10px_15px_-3px_rgba(110,231,183,0.4)]"
>
  <div>
    <div className="mt-2 text-emerald-300 text-gradient">
      <div className="text-md md:text-xl ">{experience[0].title}</div>
      <div className="text-md md:text-xl ">{experience[0].company}</div>
    </div>
    <div className="md:text-lg text-white/60">{experience[0].period}</div>
    <div className="mt-4 text-white/60">{experience[0].description}</div>
  </div>
</Card>
    
    <Card 
  className="sm:h-auto md:h-auto lg:h-[320px] md:col-span-2 border transform hover:rotate-2 rotate-0 transition duration-300 ease-in-out hover:shadow-[0_10px_15px_-3px_rgba(110,231,183,0.4)]"
>
  <div>
    <h3 className="text-white/60 text-md md:text-xl mb-3">Skills</h3>
    <div className="flex flex-wrap gap-2 ">
      {experience[0].skills.map((skill, index) => (
        <div key={index} className="px-4 py-2 rounded-3xl bg-emerald-300 text-gray-900 text-sm">
          {skill}
        </div>
      ))}
    </div>
  </div>
</Card>
  <Card 
  className="sm:h-auto md:h-auto lg:h-[320px] md:col-span-2 border transform hover:rotate-2 rotate-0 transition duration-300 ease-in-out hover:shadow-[0_10px_15px_-3px_rgba(56,189,248,0.4)]"
>
  <div>
    <h3 className="text-white/60 text-md md:text-xl mb-3">Skills</h3>
    <div className="flex flex-wrap gap-2 ">
      {experience[1].skills.map((skill, index) => (
        <div key={index} className="px-4 py-2 rounded-3xl bg-sky-400 text-gray-900 text-sm">
          {skill}
        </div>
      ))}
    </div>
  </div>
</Card>
    <Card className="sm:h-auto md:h-auto lg:h-[320px] md:col-span-3 border transform hover:rotate-2 rotate-0 transition duration-300 ease-in-out hover:shadow-[0_10px_15px_-3px_rgba(56,189,248,0.4)]">
      <div>
        <div className="mt-1 text-sky-400 text-gradient">
          <div className="text-md md:text-xl">{experience[1].title}</div>
          <div className="text-md md:text-xl">{experience[1].company}</div>
        </div>
        <div className="text-md md:text-xl text-white/60">{experience[1].period}</div>
        <div className="mt-4 justify-center text-white/60">{experience[1].description}</div>
      </div>
    </Card>
    
    <Card 
  className="sm:h-auto md:h-auto lg:h-[320px] md:col-span-3 transform hover:rotate-2 rotate-0 transition duration-300 ease-in-out hover:shadow-[0_10px_15px_-3px_rgba(110,231,183,0.4)]"
>
  <div>
    <div className="mt-2 text-emerald-300 text-gradient">
      <div className="text-md md:text-xl ">{experience[2].title}</div>
      <div className="text-md md:text-xl ">{experience[2].company}</div>
    </div>
    <div className="md:text-lg text-white/60">{experience[2].period}</div>
    <div className="mt-4 text-white/60">{experience[2].description}</div>
  </div>
</Card>
    
    <Card 
  className="sm:h-auto md:h-auto lg:h-[320px] md:col-span-2 border transform hover:rotate-2 rotate-0 transition duration-300 ease-in-out hover:shadow-[0_10px_15px_-3px_rgba(110,231,183,0.4)]"
>
  <div>
    <h3 className="text-white/60 text-md md:text-xl mb-3">Skills</h3>
    <div className="flex flex-wrap gap-2 ">
      {experience[2].skills.map((skill, index) => (
        <div key={index} className="px-4 py-2 rounded-3xl bg-emerald-300 text-gray-900 text-sm">
          {skill}
        </div>
      ))}
    </div>
  </div>
</Card>
  </div>
</div>
 </div>
        </div>
    );
};












