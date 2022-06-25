import './app.scss'
import { React, useState } from 'react';
import ParticleBackground from '../src/particleBackground'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Sections from './Sections'
import Footer from './components/footer/Footer'


function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="app">
      <ParticleBackground className='particles-js'></ParticleBackground>
      <Navbar aboutOpen={aboutOpen} setAboutOpen={setAboutOpen}/>
      {(!aboutOpen ? <Sections/> : <About/>)}
      <Footer/>
    </div>
  );
}

export default App;
