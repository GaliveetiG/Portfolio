"use client";
import { Card } from "@/components/Card";
import {motion} from 'framer-motion';
import React, { useRef } from 'react';

const experience = [
    {
        title: "Full Stack Developer - Internship",
        company: "Virtuent Technologies",
        period: "May 2022 - Nov 2022",
        description: "My passion for developing responsive web applications during my internship, where I specialized in React to build interfaces that are not only visually appealing but also perform smoothly across various devices. I enhanced application functionality by integrating RESTful APIs, ensuring efficient and real-time data exchanges. I focused on optimizing application performance with Chrome DevTools, delivering a fast and seamless user experience.",
        skills: ["React", "JavaScript", "HTML", "CSS", "RESTful APIs", "Chrome DevTools", "Git", "Performance Optimization","MongoDB","visual studio code","postman"],
    },
    {
        title: "Machine Learning Engineer - Internship",
        company: "Pragyan-AI",
        period: "Sep 2021 - Nov 2021",
        description: "Developed a TensorFlow-based fall detection system using real-time image and video analysis to enhance safety for the elderly and individuals with disabilities. Demonstrated adaptability and creative problem-solving in a fast-paced startup environment, contributing to a project with significant social impact. Continuously expanded my machine learning expertise, applying cutting-edge techniques to practical challenges in health and wellness.",
        skills: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "Machine Learning", "Image and Video Analysis", "Jupyter Notebook"],
    },
];

export const Experience = () => {
  const constraintsRef = useRef(null);
    return (
 <div className="py-30 lg:py-33">
    <div className="container">
  <div className="uppercase tracking-widest text-center text-md md:text-xl">Experience</div> 

  <div className="mt-20 flex flex-col gap-8">
  <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-4">
  <Card 
  className="sm:h-auto md:h-auto lg:h-[320px] md:col-span-2 border transform hover:rotate-2 rotate-0 transition duration-300 ease-in-out hover:shadow-[0_10px_15px_-3px_rgba(56,189,248,0.4)]"
>
  <div>
    <h3 className="text-white/60 text-md md:text-xl mb-3">Skills</h3>
    <div className="flex flex-wrap gap-2 ">
      {experience[0].skills.map((skill, index) => (
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
          <div className="text-md md:text-xl">{experience[0].title}</div>
          <div className="text-md md:text-xl">{experience[0].company}</div>
        </div>
        <div className="text-md md:text-xl text-white/60">{experience[0].period}</div>
        <div className="mt-4 justify-center text-white/60">{experience[0].description}</div>
      </div>
    </Card>
    
    <Card 
  className="sm:h-auto md:h-auto lg:h-[320px] md:col-span-3 transform hover:rotate-2 rotate-0 transition duration-300 ease-in-out hover:shadow-[0_10px_15px_-3px_rgba(110,231,183,0.4)]"
>
  <div>
    <div className="mt-2 text-emerald-300 text-gradient">
      <div className="text-md md:text-xl ">{experience[1].title}</div>
      <div className="text-md md:text-xl ">{experience[1].company}</div>
    </div>
    <div className="md:text-lg text-white/60">{experience[1].period}</div>
    <div className="mt-4 text-white/60">{experience[1].description}</div>
  </div>
</Card>
    
    <Card 
  className="sm:h-auto md:h-auto lg:h-[320px] md:col-span-2 border transform hover:rotate-2 rotate-0 transition duration-300 ease-in-out hover:shadow-[0_10px_15px_-3px_rgba(110,231,183,0.4)]"
>
  <div>
    <h3 className="text-white/60 text-md md:text-xl mb-3">Skills</h3>
    <div className="flex flex-wrap gap-2 ">
      {experience[1].skills.map((skill, index) => (
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












