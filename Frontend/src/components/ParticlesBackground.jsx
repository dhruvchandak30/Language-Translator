import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = React.memo(() => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000", // Background color black
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 2,
              opacity: 0,
              size: 0,
              speed: 3
            },
            repulse: {
              distance: 60,
              duration: 0.4
            }
          }
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: {
              default: "out"
            },
            random: true
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 600
          },
          opacity: {
            value: { min: 0.3, max: 0.6 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              startValue: "random",
              sync: false
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 1
          }
        }
      }}
      style={{
        position: 'absolute', // Make sure particles stay in place
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Ensure it's behind the content
      }}
    />
  );
});

export default ParticlesBackground;
