import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import WorkItem from './workitem';
import Wave from './nanos/wave';
import keyProvider from '../utilis/helpers';

const Work = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            title
            description
            illustration
            tools
            links {
              type
              link
            }
          }
        }
      }
    }`);

  const getProjects = () => {
    const projects = data.allProjectsJson.edges.map((item) => item.node);
    return projects;
  };

  return (
    <div className="section section--work">
      <div className="container">
        <div className="row center-xs middle-sm between-md full">
          {getProjects().map((project) => <WorkItem key={keyProvider()} item={project} />)}
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default Work;
