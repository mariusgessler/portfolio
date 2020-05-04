import React from 'react';
import WorkItem from './workitem';
import projects from '../assets/projects';

const Work = () => (
  <div className="section section--work">
    {projects.map((project) => <WorkItem item={project} />)}
  </div>
);

export default Work;
