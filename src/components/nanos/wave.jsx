import React, { useState, useEffect } from 'react';

const Wave = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [d, setD] = useState(0);

  let last = 0;
  let yAccum = 100;

  const getY = (x) => {
    const h = window.innerWidth / 10;
    const y = Math.abs(Math.sin(x)) * h;
    return y.toString();
  };

  const updateWave = () => {
    const { scrollY } = window;

    yAccum += Math.abs(scrollY - last);
    last = scrollY;

    const start = `M-0,${(width / 10) / 2}`;
    let mid = 's';
    const end = `V ${width / 10} H-${width} Z`;

    const s = yAccum * 0.005;
    const steps = 4.0;
    const stepSize = width / steps;
    for (let i = 0; i < steps; i++) {
      mid += `${stepSize / 2}-${getY(s + i + 10)} ${stepSize}-0 `;
    }

    setD(start + mid + end);
  };

  const setDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerWidth / 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateWave, []);
    window.addEventListener('resize', setDimensions, []);

    setDimensions();

    return () => {
      window.removeEventListener('scroll', updateWave);
      window.removeEventListener('resize', setDimensions);
    };
  });

  const style = {
    height,
  };

  const viewbox = `0 0 ${width} ${height}`;

  return (
    <svg
      className="wave"
      viewBox={viewbox}
      style={style}
    >
      <g id="Layer_3" data-name="Layer 3">
        <title>wave</title>
        <path
          d={`${d}`}
        />
      </g>
    </svg>
  );
};

export default Wave;
