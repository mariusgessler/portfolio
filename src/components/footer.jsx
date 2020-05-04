import React from 'react';
import Links from './nanos/links';

const Footer = () => {
  const socials = [{
    type: 'linkedin',
    link: 'https://www.linkedin.com/in/marius-gessler/'
  },
  {
    type: 'github',
    link: 'https://github.com/mariusgessler/',
  }];

  return (
    <div className="section section--footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-xs-12 col-md-6">
            <Links links={socials} />
          </div>
          <div className="col col-xs-12 col-md-6">
            <h3>Copyright, 2020</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
