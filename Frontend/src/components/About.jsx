import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Marquee from 'react-fast-marquee';

const Aboutus = () => {
  const desc = ["Calling all adventurers! ️ Get ready to set sail on an epic treasure hunt across our very own campus! Join us for a thrilling afternoon of puzzles, riddles, and teamwork as we unearth hidden booty! Are you ready to put your skills to the test and claim the ultimate prize?"];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5 // adjust the threshold as needed
  });

  return (
    <div className='w-full min-h-screen bg-[url("/bg3.jpg")] bg-cover bg-center flex  items-center flex-col px-[50-px] lg:pt-0 lg:px-[100px] relative'>
      <div className="text-start lg:text-center bg-transparent md:w-[80%] lg:w-[80%] z-10 mt-[5rem]" ref={ref}>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="font-[Valorax] text-5xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-white my-[40px] md:my-[50px] lg:my-[50px] mx-[20px] md:mx-[10px] sm:mx-[50px]"
        >
          About Us
        </motion.h1>

        {desc.map((el, i) => (
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: i / 10 }}
            key={i}
            className="font-[Kollektif] text-lg  xs:text-lg md:text-2xl lg:text-2xl text-white mb-[50px] md:mb-[100px] lg:mb-[50px] mx-[20px] md:mx-[10px] sm:mx-[50px] leading-8"
          >
            {el}{" "}
          </motion.p>
        ))}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="font-[Valorax] text-5xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-white my-[40px] md:my-[50px] lg:my-[50px] mx-[20px] md:mx-[10px] sm:mx-[50px]"
        >
          Get Perks & Prizes
        </motion.h2>
        <Marquee direction="right" className='mt-2 w-full'>
        <div className="flex justify-between flex-wrap h-[300px] gap-3">
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/perk-1.webp" alt="first image" className="h-full rounded-lg " />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/perk-2.jpg" alt="second image" className="h-full rounded-lg" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/perk-3.jpg" alt="third image" className="h-full rounded-lg" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/perk-4.jpg" alt="fourth image" className="h-full rounded-lg" />
          </div>
          </div>
          </Marquee>
      </div>
    </div>
  );
};

export default Aboutus;
