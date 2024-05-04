import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between py-6 border-b-[1px] border-zinc-700 ">
      <div className="nleft flex items-center ">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, idx) =>
            elem.length === 0 ? (
              <span key={idx} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={idx}
                className="text-sm font-regular flex items-center gap-1"
                href="#"
              >
                {idx === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
