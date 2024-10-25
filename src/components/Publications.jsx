import React from 'react'
import { motion } from "framer-motion"
import { IoNewspaperOutline } from "react-icons/io5";

function Publications() {
  return (
      <motion.div 
        className="border-b border-neutral-900 pb-20"
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 1}}>
        <h2 className="my-10 text-center text-4xl">
            Publications
        </h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1}}
        className="text-left tracking-tight">
            <div className="flex gap-2">
                <p className="my-4 text-2xl">Face Detection and Recognition System (2019)</p>
                <a className="text-2xl my-5" href="https://www.iajer.com/wp-content/uploads/2019/12/A2120108.pdf" target="_blank"><IoNewspaperOutline /></a>
            </div>
            <p className="my-4">International Advance Journal of Engineering Research (IAJER) Volume 2, Issue 12, PP 01-08 ISSN: 2360-819X</p>
            <a href="#" className="border-b"></a>
        </motion.div>
    </motion.div>
  )
}

export default Publications
