import './about.scss'
import React from 'react';
import cam from '../../images/cam-images/cam-linkedin-nobg.png';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

export default function About() {
  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 0}}
                  transition={{ duration: 1 }}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  className="about">
        <div className="aboutContainer">
          {/* <div className="container"> */}
            <div className="left">
              <div className="imgContainer">
                <img src={cam} alt=""/>
              </div>
            </div>
            <div className="right">
              <h1><u>CAMILO IS A FULL STACK ENGINEER CURRENTLY BASED IN BROOKLYN..</u></h1>
              <br />
              {/* <p>His interests include construction technology suited to create large infrastructure applications.</p> */}
              <p>Having an interest in programming while in his university studies, Camilo dove into full stack web development at Le Wagon London. He holds a Bachelor's of Science in Civil Engineering from the University of Central Florida in which he followed by a stint in the heavy civil construction industry.</p>
              <p>In addition to some of the works he has collaborated on via Ruby on Rails and React.js, Camilo is currently pursuing fundamentals in Java in order to pursue more complex applications. In his free time he enjoys the occasional jog around Pospect Park, devouring several works of nonfiction, and playing his guitalele.</p>
              <p> He is open to entering a team environment as a developer / software engineer in the NYC metro area.</p>
            </div>
          </div>
        {/* </div> */}
      </motion.div>
    </AnimatePresence>
  )
}
