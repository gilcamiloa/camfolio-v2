import './sections.scss'
import React from 'react'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

export default function Sections() {

  return (
    <div className="sections" >
      <div className="nav__dots first__current">
        <div id="intro" ><a href='#intro'><div className="dot"></div></a></div>
        <div id="projects" ><a href='#projects'><div className="dot"></div></a></div>
        <div id="skills" ><a href='#skills'><div className="dot"></div></a></div>
        <div id="contact"><a href='#contact'><div className="dot"></div></a></div>
      </div>
      <div id="intro" ><Intro exact path="/" name='sectionsIntro' className="sectionsSlides sectionIntro"/></div>
      <div id="projects" ><Projects path="/projects" name='sectionProjects' className="sectionsSlides sectionProjects"/></div >
      <div id="skills" ><Skills path="/skills" name='sectionsSkills' className="sectionsSlides sectionSkills"/></div >
      <div id="contact" ><Contact path="/contact" name='sectionsContact' className="sectionsSlides sectionContact"/></div >
    </div>
  );
}
