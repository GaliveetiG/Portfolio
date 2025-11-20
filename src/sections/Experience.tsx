"use client";
import { Card } from "@/components/Card";
import React, { useRef } from 'react';

const experience = [

    {
   title: "Software Engineer",
   company: "Ness Digital Engineering",
   period: "Apr 2025 – Present",
   description: "Built scalable wellness-tech features for the Stitch mental-wellness platform using AWS, React, and Node.js. Developed secure TypeScript microservices on AWS Lambda and API Gateway to deliver low-latency CBT session data. Created pixel-perfect, WCAG-compliant UI using React and Tailwind, integrated REST/GraphQL APIs backed by DynamoDB, and implemented secure OAuth2/JWT flows. Collaborated in agile teams, conducted code reviews, Github reviews and documentation to support rapid iteration and reliable releases.",
   skills: ["React.js", "TypeScript", "Node.js", "AWS Lambda", "API Gateway", "DynamoDB", "GraphQL", "OAuth2", "JWT", "Redis", "Docker", "Kubernetes", "GitHub Actions"],
},
    {
   title: "Software Engineer",
   company: "HCL Technologies",
   period: "Jan 2021 – Dec 2022",
   description: "Developed real-time analytics dashboards using React, TypeScript, and Redux for drilling and exploration data. Built D3.js visualizations for anomaly detection and geospatial insights, optimized front-end performance by reducing bundle size by 32%, and integrated UI with Spring Boot REST APIs. Delivered secure authentication via OAuth2 and AWS IAM, improved UI reliability with Jest/RTL tests, implemented reusable component libraries, and collaborated with DevOps teams to containerize builds and deploy via Docker, Kubernetes, and Jenkins.",
   skills: ["React.js", "TypeScript", "Redux", "D3.js", "Spring Boot", "REST APIs", "OAuth2", "AWS IAM", "Jest", "React Testing Library", "Docker", "Kubernetes", "Jenkins"],
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
    <div className="mt-2 text-white/60">{experience[0].description}</div>
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
    
    
  </div>
</div>
 </div>
        </div>
    );
};












