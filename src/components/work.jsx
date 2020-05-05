import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import WorkItem from './workitem';

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
      {getProjects().map((project) => <WorkItem key={project.title} item={project} />)}
    </div>
  );
};

export default Work;
