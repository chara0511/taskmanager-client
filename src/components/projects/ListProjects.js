import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ListProjects = () => {
  // From projectState.js
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Get projects when the component loads
  useEffect(() => {
    getProjects();
  }, []);

  // Validate empty field
  if (projects.length === 0) return <p>No projects</p>;

  return (
    <ul className="list-projects">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
