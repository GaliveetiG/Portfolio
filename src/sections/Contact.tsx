import React from "react";
import Mail from "@/assets/images/mail.png";
import Image from "next/image";
import { Card } from "@/components/Card";

export const ContactSection = () => {
  const emailAddress = "gayathrigaliveeti111@gmail.com";
  
  return (
    <div className="py-20">
      <h2 className="uppercase tracking-widest text-center text-md md:text-xl">Get In Touch</h2>
      <div className="container mt-8">
        <Card className="py-8 px-10 rounded-3xl">
          <p className="text-md md:text-lg mt-2 text-white/60">I am always on the lookout for new opportunities and my inbox is open for all. If you are considering my contribution, have a question, or just want to say hi, you can count on hearing back from me!</p>
          <div className="flex justify-center mt-8">
            <a
              href={`mailto:${emailAddress}`}
              className="inline-block"
            >
              <div className="font-bold bg-gradient-to-r from-emerald-300 to-sky-400 h-12 rounded-3xl hover:rotate-3 transition duration-300">
                <button className="text-gray-900 inline-flex items-center justify-center gap-2 px-10 h-12 rounded-3xl  ">
                  <Image 
                    className="size-[20px] rounded-xl " 
                    src={Mail} 
                    alt="Mail icon" 
                  />
                  Say hello
                </button>
              </div>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};