import { useEffect } from 'react';
import propTypes from 'prop-types';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const constellationOptions = (variant) => {
  const field = variant === 'field';
  return {
    fullScreen: { enable: false },
    fpsLimit: 32,
    detectRetina: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    background: { color: 'transparent' },
    particles: {
      number: {
        value: field ? 120 : 32,
        density: field
          ? { enable: false }
          : { enable: true, width: 1600, height: 900 },
      },
      color: {
        value: field
          ? ['#ffffff', '#f4f8fc', '#c5dff5', '#7eb6e0']
          : ['#ffffff', '#f3f7fb', '#d5e6f5', '#9ec8ea'],
      },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.2, max: 0.8 },
        animation: {
          enable: true,
          speed: 0.25,
          sync: false,
          startValue: 'random',
          mode: 'random',
        },
      },
      size: { value: { min: field ? 1.2 : 0.5, max: field ? 3 : 1.8 } },
      move: {
        enable: true,
        speed: 0.18,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
      links: {
        enable: true,
        distance: 120,
        color: '#b7d4ee',
        opacity: field ? 0.45 : 0.2,
        width: field ? 1.2 : 0.5,
        frequency: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
  };
};

const slimReady = loadSlim(tsParticles).catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  if (message.includes('Registration APIs')) return undefined;
  throw error;
});
const activeRequests = new Map();

function Constellation({ id, variant }) {
  useEffect(() => {
    const request = {};
    activeRequests.set(id, request);
    let container;

    slimReady
      .then(async () => {
        if (activeRequests.get(id) !== request) return undefined;
        const element = document.getElementById(id);
        if (!element) return undefined;
        return tsParticles.load({
          id,
          element,
          options: constellationOptions(variant),
        });
      })
      .then((loaded) => {
        if (activeRequests.get(id) !== request) {
          loaded?.destroy();
          return;
        }
        container = loaded;
      })
      .catch(() => undefined);

    return () => {
      if (activeRequests.get(id) === request) {
        activeRequests.delete(id);
      }
      container?.destroy();
    };
  }, [id, variant]);

  return (
    <div
      id={id}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    />
  );
}

Constellation.propTypes = {
  id: propTypes.string.isRequired,
  variant: propTypes.string,
};

Constellation.defaultProps = {
  variant: undefined,
};

export default Constellation;
