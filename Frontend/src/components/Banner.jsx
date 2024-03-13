import React, { useState, useEffect} from "react";
import Navbar from "./Navbar.jsx";

import "../Styles/Fonts.css"
import "../Styles/Home.css";

const Banner = () => {

  const [windowWidth, setWindowWidth] = useState({
    windowWidth: window.innerWidth,
  });

  const detectSize = () => {
    setWindowWidth({
      windowWidth: window.innerWidth,
    });
  };

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

      <h1 className="font-[Simplicity] text-4xl md:text-[1] lg:text-8xl text-white z-0">PlayTopia</h1>
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

      <h1 className="text-4xl font-[Simplicity] md:text-7xl lg:text-8xl text-white z-10">PlayTopia</h1>
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
