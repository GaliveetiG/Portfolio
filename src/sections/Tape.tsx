import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words  = [
  "Performant",
  "Accessible",
  "User Friendly",
  "Responsive",
  "optimization",
  "User experience",
  "Performant",
  "Accessible",
  "User Friendly",
  "Responsive",
];

export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex overflow-hidden mask-image-[linear-gradient(to_right,transparent,rgba(0,0,0,1),rgba(0,0,0,1),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,1),rgba(0,0,0,1),transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3  animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((__, idx) =>(
              <Fragment key={idx}>
              {words.map((word) => (
                <div key={word} className="inline-flex gap-5 items-center">
                  <span className="text-gray-900 uppercase font-extrabold text-sm ">
                    {word}
                  </span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12" />
                </div>
              ))}
              </Fragment>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};
