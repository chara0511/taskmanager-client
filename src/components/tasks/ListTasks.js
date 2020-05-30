import React, { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
  const tasks = [
    { name: "Choose platform", state: true },
    { name: "Choose colors", state: false },
    { name: "Choose payment platforms", state: false },
    { name: "Choose hosting", state: true },
  ];

  return (
    <Fragment>
      <h2>Project: Store Online</h2>

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
