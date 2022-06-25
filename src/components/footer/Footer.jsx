import './footer.scss'
import { React } from 'react';
// import Intro from '../intro/Intro'
// import Projects from '../projects/Projects'
// import Skills from '../skills/Skills'
// import Contact from '../contact/Contact'
// import { Link } from 'react-router-dom' //, Route, HistoryRouterProps
// import {useState, useEffect} from 'react'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
// import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

  return(
    <div className="footer">
      <div className="items">
        <div className='link__wrapper'>
          <a href="https://www.linkedin.com/in/camilo-gil" target="_blank" rel="noreferrer" id='a-linkedin' data-tip data-for="linkedin">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            <ReactTooltip id="linkedin" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>LinkedIn</ReactTooltip>
            </a>
          <a href="https://www.github.com/gilcamiloa" target="_blank" rel="noreferrer" id='a-github' data-tip data-for="github">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            <ReactTooltip id="github" place="top" effect="solid" backgroundColor='none' data-delay-show='1200'>GitHub</ReactTooltip>
            </a>
          <a href="mailto:cgilv6@gmail.com" target="_blank" rel="noreferrer" id='a-email' data-tip data-for="email">
            <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
            <ReactTooltip id="email" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>Email</ReactTooltip>
            </a>
          {/* <a href="https://drive.google.com/file/d/1WRmISIuZONc6EHOZwdzkxUKru2B4K0RY/view?usp=sharing" target="_blank" rel="noreferrer" id='a-resume' data-tip data-for="resume">
            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
            <ReactTooltip id="resume" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>Resume / CV</ReactTooltip>
          </a> */}
        </div>
      </div>
    </div>
  )
}
