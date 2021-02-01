import React from 'react';
import portrait from '../assets/illustrations/portrait.svg';

const Hero = () => (
  <div className="section section--hero">
    <div className="container">
      <div className="container-fluid">
        <div className="row center-xs between-sm middle-sm">
          <div className="col col-xs-12 col-sm-6 col-md-4">
            <div className="introduction text__wrapper">
              <h1>Hi, I&apos;m Marius.</h1>
              <h2>
                I&apos;m a developer who enjoys working on meaningful projects 
                with some nice people.
              </h2>
            </div>
          </div>
          <div className="col col-xs-12 col-sm-4">
            <div className="img__wrapper fade-in">
              <img src={portrait} alt="Imagetrace of Marius" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
