import React from 'react'
import { EDUCATION } from '../constants';
import { motion } from "framer-motion";
function Education() {
  return (
    <section id="education">
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
                className="my-20 text-center text-4xl"
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5, y: 0}}>Education</motion.h2>
            <div>
                {EDUCATION.map((education, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                        className="w-full lg:w-1/4"
                        whileInView={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: -100}}
                        transition={{duration: 1}}>
                            <p className="mb-2 text-sm text-neutral-400">{education.years}</p>
                        </motion.div>
                        <motion.div 
                            className="w-full max-w-xl lg:w-3/4"
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{duration: 1}}>
                            <h6 className="mb-2 font-semibold">
                                {education.degree} - {" "}
                                <span className="text-sm text-purple-100">
                                    {education.institute}, {education.location}
                                </span>
                            </h6>
                            <p className="mb-1 text-neutral-400">CGPA/GPA: {education['CGPA/GPA']}</p>
                        </motion.div>
                    </div>    
                ))}
            </div>
        </div>
    </section>
  )
}

export default Education
