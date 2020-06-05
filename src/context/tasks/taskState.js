import React, { useReducer } from "react";
import taskReducer from "./taskReducer";
import taskContext from "./taskContext";

import { TASKS_PROJECT, ADD_TASK } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Choose platform", state: true, projectId: 1 },
      { name: "Choose colors", state: false, projectId: 2 },
      { name: "Choose payment platforms", state: false, projectId: 3 },
      { name: "Choose hosting", state: true, projectId: 4 },

      { name: "Choose platform", state: true, projectId: 1 },
      { name: "Choose colors", state: false, projectId: 2 },
      { name: "Choose payment platforms", state: false, projectId: 3 },

      { name: "Choose platform", state: true, projectId: 4 },
      { name: "Choose colors", state: false, projectId: 1 },
      { name: "Choose payment platforms", state: false, projectId: 2 },

      { name: "Choose platform", state: true, projectId: 3 },
      { name: "Choose colors", state: false, projectId: 4 },
      { name: "Choose payment platforms", state: false, projectId: 3 },
    ],
    tasksproject: null,
  };

  // Dispatch to execute the actions
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Main functions

  // Get tasks for each project
  const getTasks = (proyectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: proyectId,
    });
  };

  // Add a task to the selected project
  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        getTasks,
        addTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
