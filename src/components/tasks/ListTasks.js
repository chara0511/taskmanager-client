import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const ListTasks = () => {
  // Projects from ProjectState.js
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Validate
  if (!project) return <h2>Select a project</h2>;

  // Applying array destructuring
  const [actualProject] = project;

  const tasks = [
    { name: "Choose platform", state: true },
    { name: "Choose colors", state: false },
    { name: "Choose payment platforms", state: false },
    { name: "Choose hosting", state: true },
  ];

  return (
    <Fragment>
      <h2>Project: {actualProject.name}</h2>

      <ul className="tasks-list">
        {tasks.length === 0 ? (
          <li className="task">No tasks</li>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
      </ul>

      <button type="button" className="btn btn-delete">
        Delete Project
      </button>
    </Fragment>
  );
};

export default ListTasks;
