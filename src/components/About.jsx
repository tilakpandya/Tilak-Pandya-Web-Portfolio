import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"


const About = () => {
  return (
    <section id="about-me">
        <div className="border-b border-neutral-900 pb-4 about-me">
            <h1 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap w-full">
            <motion.div 
                className="flex justify-center" // Removing lg:justify-start for uniform alignment across screen sizes
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{ duration: 0.5 }}  // Fixed typo: 'duration' instead of 'duarion'
            >
                <p className="my-2 max-w-full">{ABOUT_TEXT}</p>  {/* max-w-full to ensure full width */}
            </motion.div>
            </div>
        </div>

    </section>
  )
}

export default About
