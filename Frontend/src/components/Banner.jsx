import React, { useState, useEffect} from "react";
import Navbar from "./Navbar.jsx";

import "../Styles/Fonts.css"
import "../Styles/Home.css";
import { ArrowDownFromLine } from "lucide-react";
import { motion } from "framer-motion";

const Banner = () => {

  const [windowWidth, setWindowWidth] = useState({
    windowWidth: window.innerWidth,
  });

  const detectSize = () => {
    setWindowWidth({
      windowWidth: window.innerWidth,
    });
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }),[];


  return (
    <div>
      {windowWidth.windowWidth < 550 ? (
        <div className=" h-screen w-full lg:pt-0 lg:px-[100px] lg:pb-[40px] sm:px-[50-px] flex justify-center items-center flex-col relative ">
      
      <video src="/bg.mp4" autoPlay loop muted className="absolute left-0 top-0 object-cover w-full h-full -z-10"/>
      <Navbar/>

      <h1 className="font-[Simplicity] text-[3.25rem] md:text-[1] lg:text-8xl text-white z-0">PlayTopia</h1>


      <a href="#events" className="flex justify-center rounded-lg w-[150px] bg-white h-[50px] my-3  items-center   cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r  before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0  mt-[3rem] font-bold text-black " onClick={() => handleScrollToSection('events')}>
                        Register <ArrowDownFromLine />
                      </a>
      <div id="swipeDown">
          <div className="lines">
            <div className="line"></div>
            <div id="swipeDownTxt">Playtopia</div>
          </div>
        </div>

    </div>
      ) : (
        <div className=" h-screen w-full lg:pt-0 lg:px-[100px] lg:pb-[40px] sm:px-[50-px] flex justify-center items-center flex-col relative ">
      {/* <img src="/bgmi.jpg" alt="" className="absolute left-0 top-0 object-cover w-full h-full -z-10"/> */}
      <video src="/bg.mp4" preload="auto" autoPlay loop muted className="absolute left-0 top-0 object-cover w-full h-full z-8"/>
      <Navbar/>
      <motion.h1
                className="text-4xl font-[Simplicity] md:text-7xl lg:text-8xl text-white z-10"
                initial={{ x: -1000,  opacity:0 }} // Initial position (off-screen and invisible)
                animate={{ x: 0,  opacity:1 }} // Animation when component mounts
                transition={{ type:"tween", stiffness: 150, damping: 20, duration: 0.5 }}
      >
        PlayTopia
      </motion.h1>
      {/* <h1 className="text-4xl font-[Simplicity] md:text-7xl lg:text-8xl text-white z-10">PlayTopia</h1> */}

      <a href="#events" className="flex justify-center rounded-lg w-[150px] bg-white h-[50px] my-3  items-center   cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0  mt-[3rem] bg-gradient-to-r  font-bold text-black " onClick={() => handleScrollToSection('events')}>
                        Register <ArrowDownFromLine />
      </a>
      <div id="swipeDown">
          <div className="lines">
            <div className="line"></div>
            <div id="swipeDownTxt">Playtopia</div>
          </div>
        </div>

    </div>)}
    </div>
    
  );
};

export default Banner;
