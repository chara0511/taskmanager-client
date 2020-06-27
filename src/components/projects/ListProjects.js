import React, { useContext, useEffect } from "react";
import Project from "./Project";

import projectContext from "../../context/projects/projectContext";
import alertContext from "../../context/alerts/alertContext";

const ListProjects = () => {
  // From projectState.js
  const projectsContext = useContext(projectContext);
  const { projects, message, getProjects } = projectsContext;

  const { alert, showAlert } = useContext(alertContext);

  // Get projects when the component loads
  useEffect(() => {
    // if there was an error deleting a project
    if (message) {
      showAlert(message.msg, message.category);
    }

    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  // Validate empty field
  if (projects.length === 0) return <p>No projects</p>;

  return (
    <ul className="list-projects">
      {alert ? <p className={`alert ${alert.category}`}>{alert.msg}</p> : null}

      {projects.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
