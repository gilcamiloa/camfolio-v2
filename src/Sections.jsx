import './sections.scss'
import { React} from 'react'
// import { React,useState } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

export default function Sections() {
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;

  scroll.scrollTo(0);
  scroll.scrollToPro(100);
  scroll.scrollToSkills(200);
  scroll.scrollToContact(300);
  return (
    <div className="sections" >
      <div className="nav__dots first__current">
        <div id="dot1" className="dot"><Link to='sectionsIntro' onClick={<Intro/>} spy={true} smooth={true} duration={500} horizontal={true}></Link></div>
        <div id="dot2" className="dot"><Link to='sectionProjects' onClick={<Projects />} spy={true} smooth={true} duration={500} horizontal={true}></Link></div>
        <div id="dot3" className="dot"><Link to='sectionsSkills' onClick={<Skills />} spy={true} smooth={true} duration={500} horizontal={true}></Link></div>
        <div id="dot4" className="dot"><Link to='sectionsContact' onClick={<Contact />} spy={true} smooth={true} duration={500} horizontal={true}></Link></div>
      </div>
      <Intro exact path="/" name='sectionsIntro' className="sectionsSlides sectionIntro"/>
      <Projects path="/projects" name='sectionProjects' className="sectionsSlides sectionProjects"/>
      <Skills path="/skills" name='sectionsSkills' className="sectionsSlides sectionSkills"/>
      <Contact path="/contact" name='sectionsContact' className="sectionsSlides sectionContact"/>
    </div>
  );
}
