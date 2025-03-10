import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ 
  className,
   children,
   ...other
   }: ComponentPropsWithoutRef< "div">) => {
    return (
        <div className={twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden p-4 after:z-10 after:content-[''] " +
              "after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl " +
              "border border-white/20 after:pointer-events-none p-4",
               className)}
                {...other}
                >
                 <div className="absolute inset-0 opacity-5 -z-10 " 
                    style={{ 
                     backgroundImage: `url(${grainImage.src})`,
        
             }}>

           </div>
           {children}
        </div>    

    );
};