import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import WorkItem from './workitem';
import Wave from './nanos/wave';

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
        <div className="container-fluid">
          <div className="row center-xs middle-sm between-md">
            {getProjects().map((project) => <WorkItem key={project.title} item={project} />)}
          </div>
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default Work;
