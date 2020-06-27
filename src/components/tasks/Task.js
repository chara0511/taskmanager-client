import React, { useContext } from "react";

import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  // Get state of projectState
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Get state of taskState
  const tasksContext = useContext(taskContext);
  const { getTasks, deleteTask, editTask, saveActualTask } = tasksContext;

  // Applying array destructuring
  const [actualProject] = project;

  // Function to delete a task
  const onClickDelete = (id) => {
    deleteTask(id, actualProject._id);
    getTasks(actualProject._id);
  };

  // Function that modifies the state of tasks
  const changeState = (task) => {
    if (task.state) {
      task.state = false;
    } else {
      task.state = true;
    }

    editTask(task);
  };

  // Add an actual task to edit
  const selectTask = (task) => {
    saveActualTask(task);
  };

  return (
    <li className="task shadow">
      <p>{task.name}</p>

      <div className="state">
        {task.state ? (
          <button
            type="button"
            className="complete"
            onClick={() => changeState(task)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incomplete"
            onClick={() => changeState(task)}
          >
            Incomplete
          </button>
        )}
      </div>

      <div className="actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => selectTask(task)}
        >
          Edit
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onClickDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
