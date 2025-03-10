"use client";

import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import JobTitles from "@/components/JobTitles";
import SocialButtons from "@/components/SocialButtons";

export const Home = () => {


  return (
    <div className="relative w-full h-full min-h-screen sm:min-h-[100vh] overflow-hidden mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-48 lg:py-60 z-0">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px]  hero-ring"></div>
        <div className="size-[820px]  hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-15}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={-5}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-2 text-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <div className="Font-serif text-3xl md:text-5xl text-center mt-12 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            GAYATHRI GALIVEETI
          </div>
          <div>
            <div className="flex flex-col items-center px-4 py-1.5 mt-4 gap-3">
              <JobTitles />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <p className="text-center flex flex-col items-center mt-6 gap-4 md:text-lg text-white/60">
          I build secure, innovative web applications that enhance user
          engagement and drive technological advancement.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-6 ">
        <button className="inline-flex items-center gap-0 rounded-2xl px-6 h-10">
          <span className="">
            <SocialButtons />
          </span>
        </button>

        <a
  className="inline-flex items-center font-medium leading-tight text-foreground group"
  href="/GayathriGaliveeti_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View Gayathri Galiveeti's full resume (PDF)"
>
  <span className="border-b border-transparent pb-px transition group-hover:border-emerald-300 motion-reduce:transition-none">
    View Full Resume
  </span>
  <svg
    className="ml-1 h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</a>

      </div>
    </div>
  );
};
