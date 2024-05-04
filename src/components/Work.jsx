import React, { useState } from "react";
import { motion, scroll, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "64%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "70%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "58%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "74%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "66%",
      left: "58%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "62%",
      left: "52%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (change) => {
    const showImages = (arr) => {
      setImages((prev) =>
        prev.map((item, idx) =>
          arr.indexOf(idx) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    };

    switch (Math.floor(change * 100)) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 5:
        showImages([0, 1]);
        break;
      case 7:
        showImages([0, 1, 2]);
        break;
      case 9:
        showImages([0, 1, 2, 3]);
        break;
      case 11:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 13:
        showImages([0, 1, 2, 3, 4, 5]);
        break;

    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className="text-[40vw] leading-none text-center font-medium tracking-tight select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, idx) =>
              elem.isActive && (
                <img
                  key={idx}
                  className="absolute w-72 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
