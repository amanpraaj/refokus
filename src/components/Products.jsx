import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Clua",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "n interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: true,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
  ];

  const [position, setPosition] = useState(0);

  const mover = (val) => {
    setPosition(val * 16);
  };

  return (
    <div className="mt-32 relative">
      {products.map((elem, idx) => (
        <Product mover={mover} count={idx} key={idx} val={elem} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute rounded-xl w-[20rem] h-[16rem] bg-white left-[45%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -position + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }}
            className="w-full h-full bg-blue-100"
          ></motion.div>
          <motion.div
            animate={{ y: -position + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }}
            className="w-full h-full bg-green-100"
          ></motion.div>
          <motion.div
            animate={{ y: -position + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }}
            className="w-full h-full bg-yellow-100"
          ></motion.div>
          <motion.div
            animate={{ y: -position + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }}
            className="w-full h-full bg-red-100"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
