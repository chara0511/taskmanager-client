import React, { useContext, useState, useEffect } from "react";

import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  // Extract if a project is active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Get state of tasks
  const tasksContext = useContext(taskContext);
  const {
    errortask,
    selectedtask,
    getTasks,
    addTask,
    errorTask,
    editTask,
    cleanTask,
  } = tasksContext;

  // State form
  const [task, setTask] = useState({
    name: "",
  });

  // Detect if a task is select
  useEffect(() => {
    if (selectedtask !== null) {
      setTask(selectedtask);
    } else {
      setTask({ name: "" });
    }
  }, [selectedtask]);

  // Extract name's project
  const { name } = task;

  // Validate
  if (!project) return null;

  // Applying array destructuring
  const [actualProject] = project;

  // Read form values
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // validate
    if (name.trim() === "") {
      errorTask();
      return;
    }

    // Edit or Add a task
    if (selectedtask === null) {
      // send a new task to taskState
      task.projectId = actualProject.id;

      task.state = false;

      addTask(task);
    } else {
      // editing actual task
      editTask(task);

      // clean selected task od state
      cleanTask();
    }

    // Get and filter new task added
    getTasks(actualProject.id);

    // restart form
    setTask({
      name: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="container-input">
          <input
            type="text"
            className="input-text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="container-input">
          <input
            type="submit"
            className="btn btn-primary btn-submit btn-block"
            value={selectedtask ? "Edit Task" : "Add Task"}
          />
        </div>
      </form>
      {errortask ? (
        <p className="message error">Task name is required</p>
      ) : null}
    </div>
  );
};

export default FormTask;
