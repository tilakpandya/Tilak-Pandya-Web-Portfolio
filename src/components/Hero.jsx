import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/TilakPandyaProfile.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x:-100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {durartion: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants = {container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Tilak Pandya
                    </motion.h1>
                    <motion.span 
                    variants = {container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Software Developer
                    </motion.span>
                    <motion.p 
                    variants = {container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tight">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
                <motion.div 
                className="text-center my-10"
                variants = {container(1.5)}
                initial="hidden"
                animate="visible">
                    <a 
                        href="https://drive.google.com/file/d/1DJ0MmMQ63DS3mlPiin2bryQ3OmSrO5JK/view?usp=sharing" 
                        download="Tilak_Pandya_Resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className="px-20 py-3 bg-white text-black font-semibold border border-black rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        Download Resume
                        </button>
                    </a>
                </motion.div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 max-w-full">
                <div className="flex justify-center">
                    <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity: 1}} transition={{durartion: 1, delay: 1.4}} className="max-w-full h-auto object-cover" src={profilePic} alt="Tilak Pandya" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero
