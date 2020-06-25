import React, { useContext, useEffect } from "react";
import Project from "./Project";

import projectContext from "../../context/projects/projectContext";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListProjects = () => {
  // From projectState.js
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Get projects when the component loads
  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Validate empty field
  if (projects.length === 0) return <p>No projects</p>;

  return (
    <ul className="list-projects">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={200} classNames="project">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
