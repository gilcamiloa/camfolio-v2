import './global.scss'
import React from 'react';
import Particles from "react-tsparticles";
import camIcon from '../src/images/cam-images/cam-icon.svg'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faLinkedin from '@fortawesome/free-brands-svg-icons'
// import icon1 from '../src/images/cam-icon.svg'

export default function ParticlesBackground () {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'e7e7e752',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 8,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 80,
              duration: 0.6,
            },
          },
        },
        particles: {
          color: {
            value: "#000000",
          },
          links: {
            color: "e7e7e752",
            distance: 10,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
            images: [
              // {
              //   src: "img/shapes/0.svg",
              //   width: 100,
              //   height: 100
              // },
              {
                src:{camIcon},
                width: 20,
                height: 20
              }
            ]
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
  );
};
