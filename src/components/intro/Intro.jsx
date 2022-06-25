import './intro.scss'
import { React } from 'react';
import Typed from 'react-typed'
import cam from '../../images/cam-images/cam-airjoshuaa-removebg.png'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

export default function Intro() {

  const strings = [
    'Avid reader 📚',
    'Music lover 🎷🎼',
    'soccer aficionado ⚽️'
  ];

  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 0}}
                  transition={{ duration: 1}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
        className='intro' id="intro">
        <div className="introContainer">
          <div className="left">
            <h1>CAMILO GIL</h1>
            <br />
            <h2>Brooklyn based Software Engineer</h2>
            <br />
            <div className="typed-text">
              <h3><Typed
                    typeSpeed={30}
                    backSpeed={20}
                    strings={strings}
                    loop='true'/>
                </h3>
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}className="right">
            <img src={cam} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
