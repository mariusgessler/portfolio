import React, { useState, useEffect, useCallback } from 'react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  const onScroll = useCallback(() => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight
     - document.documentElement.clientHeight;
    const scroll = `${(scrollPx / winHeightPx) * 100}%`;
    setWidth(scroll);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, []);

    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const style = {
    width,
  };

  return (
    <div className="section section--scrollbar">
      <div className="bar__container">
        <div className="bar" style={style} />
      </div>
    </div>
  );
};

export default ScrollProgress;
