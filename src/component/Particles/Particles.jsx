import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function RenderParticles() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="z-20"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#3B343D",
          },
        },
        fpsLimit: 120,
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
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 80,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "#C9FEF5",
          },

          links: {
            color: "#033B5C",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 3,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 20,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 2, max: 7 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export function RenderLessParticles() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="z-20"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#3B343D",
          },
        },
        fpsLimit: 120,
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
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 80,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "#C9FEF5",
          },

          links: {
            color: "#033B5C",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 3,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 5,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 2, max: 7 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default RenderParticles;
