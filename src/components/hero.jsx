import React from 'react';
import portrait from '../assets/illustrations/portrait.svg';

const Hero = () => (
  <div className="section section--hero">
    <div className="row center-xs middle-sm around-md">
      <div className="col col-xs-12 col-sm-4">
        <div className="introduction text__wrapper">
        <h1>Hi, I&apos;m Marius.</h1>
        <h2>
          I&apos;m a developer who enjoys working on meaningful projects with some nice people,
          currently at
          <a
            href="https://hiber.global/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Hiber.
          </a>
        </h2>
        </div>
      </div>
      <div className="col col-xs-12 col-sm-6 end-sm">
        <div className="img__wrapper fade-in">
          <img src={portrait} alt="Imagetrace of Marius" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
