import React from 'react';
import WorkItem from './workitem';
import projects from '../data/projects';

const Work = () => (
  <div className="section section--work">
    {projects.map((project) => <WorkItem key={project.title} item={project} />)}
  </div>
);

export default Work;
