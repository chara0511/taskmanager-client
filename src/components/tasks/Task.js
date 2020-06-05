import React, { useContext } from "react";

import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  // Get state of projectState
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Get state of taskState
  const tasksContext = useContext(taskContext);
  const { getTasks, deleteTask } = tasksContext;

  // Applying array destructuring
  const [actualProject] = project;

  // Function to delete a task
  const onClickDelete = (id) => {
    deleteTask(id);
    getTasks(actualProject.id);
  };

  return (
    <li className="task shadow">
      <p>{task.name}</p>

      <div className="state">
        {task.state ? (
          <button type="button" className="complete">
            Complete
          </button>
        ) : (
          <button type="button" className="incomplete">
            Incomplete
          </button>
        )}
      </div>

      <div className="actions">
        <button type="button" className="btn btn-primary">
          Edit
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onClickDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
