import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ imagesurl, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flx-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurl.map((url, idx) => (
          <img key={idx} src={url} className="flex-shrink-0 w-[6vw]" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flx-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurl.map((url, idx) => (
          <img key={idx} src={url} className="flex-shrink-0 w-[6vw]" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
