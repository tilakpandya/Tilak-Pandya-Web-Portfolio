import React from 'react';
import { RiReactjsLine, RiCodeBoxFill } from 'react-icons/ri';
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPhp } from "react-icons/bi";
import { SiPython } from 'react-icons/si';
import { FaGithub } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { LiaAws } from "react-icons/lia";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <section id="technologies">
      <div className="border-b border-neutral-900 pb-4 lg:mb-15">
        <motion.h2 
          className="my-20 text-center text-4xl"
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity:0, y: -100}}
          transition={{duration: 1.5}}
          animate="animate">Technologies</motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div 
              className="rounded-2xl border-4 border-neutral-800 p-4"
              variants={iconVariants(2)}
              initial="initial"
              animate="animate">
            <LiaAws className="text-7xl text-orange-400"/>
          </motion.div>
          <motion.div 
              className="rounded-2xl border-4 border-neutral-800 p-4"
              variants={iconVariants(4)}
              initial="initial"
              animate="animate">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
          </motion.div>
          <motion.div 
              className="rounded-2xl border-4 border-neutral-800 p-4"
              variants={iconVariants(2)}
              initial="initial"
              animate="animate">
            <SiPython className="text-7xl text-blue-400"/>
          </motion.div>
          <motion.div 
              className="rounded-2xl border-4 border-neutral-800 p-4"
              variants={iconVariants(4)}
              initial="initial"
              animate="animate">
            <BiLogoPhp className="text-7xl text-orange-400"/>
          </motion.div>
          <motion.div 
              className="rounded-2xl border-4 border-neutral-800 p-4"
              variants={iconVariants(2)}
              initial="initial"
              animate="animate">
            <IoLogoJavascript className="text-7xl text-red-400"/>
          </motion.div>
          <motion.div 
              className="rounded-2xl border-4 border-neutral-800 p-4"
              variants={iconVariants(4)}
              initial="initial"
              animate="animate">
            <FaGithub className="text-7xl text-white-400"/>
          </motion.div>
          <motion.div 
              className="rounded-2xl border-4 border-neutral-800 p-4"
              variants={iconVariants(2)}
              initial="initial"
              animate="animate">
            <SiMysql className="text-7xl text-blue-400"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
