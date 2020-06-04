import React, { useContext } from "react";

import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  // Get state of projects
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  // Func to add actual project
  const selectProject = (id) => {
    actualProject(id); // from projectState
    getTasks(id); // from taskState
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
