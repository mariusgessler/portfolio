import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Headshot from './nanos/headshot';

const About = () => {
  const data = useStaticQuery(graphql`
  query AboutQuery {
    allAboutJson {
      edges {
        node {
          title
          content
        }
      }
    }
  }`);

  const getAbout = () => {
    const about = data.allAboutJson.edges.map((item) => item.node);
    return Object.assign({}, ...about);
  };

  return (
    <div className="section section--about">
      <div className="row center-xs middle-sm around-md">
        <div className="col col-xs-12 col-sm-4">
          <div className="description text__wrapper">
            <h3>{getAbout().title}</h3>
            {getAbout().content.split('\n').map((i) => <p key={i}>{i}</p>)}
          </div>
        </div>
        <div className="col col-xs-12 col-sm-6 start-sm">
          <div className="img__wrapper fade-in">
            <Headshot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
