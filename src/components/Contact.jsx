import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

function Contact() {
  return (
    <section id="contactme">
      <motion.div 
        className="border-b border-neutral-900 pb-20"
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 1}}>
        <h2 className="my-10 text-center text-4xl">
            Get in Touch
        </h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1}}
        className="text-center tracking-tight">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </motion.div>
    </motion.div>
    </section>
  )
}

export default Contact
