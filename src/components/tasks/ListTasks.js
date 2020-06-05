import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const ListTasks = () => {
  // Projects from projectState
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // Projects from taskState
  const tasksContext = useContext(taskContext);
  const { tasksproject } = tasksContext;

  // Validate
  if (!project) return <h2>Select a project</h2>;

  // Applying array destructuring
  const [actualProject] = project;

  // Delete a project
  const onClickDelete = () => {
    deleteProject(actualProject.id);
  };

  return (
    <Fragment>
      <h2>Project: {actualProject.name}</h2>

      <ul className="tasks-list">
        {tasksproject.length === 0 ? (
          <li className="task">No tasks</li>
        ) : (
          tasksproject.map((task) => <Task task={task} />)
        )}
      </ul>

      <button type="button" className="btn btn-delete" onClick={onClickDelete}>
        Delete Project
      </button>
    </Fragment>
  );
};

export default ListTasks;
