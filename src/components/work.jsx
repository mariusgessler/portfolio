import React from 'react';
import WorkItem from './workitem';
import projects from '../assets/projects';

const Work = () => projects.map((project) => <WorkItem item={project} />);

export default Work;
