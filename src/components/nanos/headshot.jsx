import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Headshot = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "headshot.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`);

  return (
    <div className="img__wrapper">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Headshot of Marius"
      />
    </div>
  );
};

export default Headshot;
