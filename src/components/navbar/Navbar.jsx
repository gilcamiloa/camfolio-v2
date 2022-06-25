import './navbar.scss'
import { React } from 'react';
import { NavLink } from 'react-router-dom'
import About from "../about/About.jsx"
import logo from '../../images/cloud-images/logo2-apple-touch-icon.png'

export default function Navbar({ aboutOpen, setAboutOpen }) {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href='/' className="logo"><img src={logo} alt='' className="logo"/></a>
        </div>
        <div className="right">
          <NavLink to={!aboutOpen ? '/about': '/'} component={<About />} onClick={() => setAboutOpen(!aboutOpen)} className='active'>
            {(!aboutOpen ? 'ABOUT' : 'CLOSE')}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
