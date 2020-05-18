import React from 'react';
import Links from './nanos/links';

const Footer = () => {
  const socials = [{
    type: 'linkedin_blue',
    link: 'https://www.linkedin.com/in/marius-gessler/',
  },
  {
    type: 'github_blue',
    link: 'https://github.com/mariusgessler/',
  },
  {
    type: 'email_blue',
    link: 'mailto: marius.gessler@gmail.com',
  }];

  return (
    <div className="section section--footer">
      <div className="container">
        <div className="container-fluid">
          <div className="row between-xs middle-sm">
            <div className="col col-xs-12 col-sm-6">
              <Links links={socials} />
            </div>
            <div className="col col-xs-12 col-sm-6 end-sm">
              <h3>Marius Gessler, 2020</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
