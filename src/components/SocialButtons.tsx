"use client";

import React from 'react';
import Image from 'next/image';
import GitHub from "@/assets/images/git.png";
import Mail from "@/assets/images/mail.png";
import Linkedin from "@/assets/images/linkedin.png";

const SocialButtons = () => {
  const handleClick = (platform: string): void => {
    console.log(`Clicked on ${platform} button`);
  };

  return (
    <div className="flex items-center gap-2 relative z-10">
      {/* GitHub Button */}
      <a
        href="https://github.com/GaliveetiG?tab=overview&from=2025-09-01&to=2025-09-18"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-800 transition-colors border-2 border-gray-800 cursor-pointer"
        onClick={() => handleClick('GitHub')}
      >
        <Image
          src={GitHub}
          alt="GitHub"
          width={24}
          height={24}
          className="rounded-xl"
          priority
        />
      </a>
      
      {/* LinkedIn Button */}
      <a
        href="http://www.linkedin.com/in/gayathri-galiveeti"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-800 transition-colors border-2 border-gray-800 cursor-pointer"
        onClick={() => handleClick('LinkedIn')}
      >
        <Image
          src={Linkedin}
          alt="LinkedIn"
          width={24}
          height={24}
          className="rounded-xl"
          priority
        />
      </a>
      
      {/* Gmail Button */}
      <a
        href="mailto:gayathrigaliveeti1111@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-800 transition-colors border-2 border-gray-800 cursor-pointer"
        onClick={() => handleClick('Email')}
      >
        <Image
          src={Mail}
          alt="Email"
          width={24}
          height={24}
          className="rounded-xl"
          priority
        />
      </a>
    </div>
  );
};

export default SocialButtons;