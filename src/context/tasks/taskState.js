import React, { useReducer } from "react";
import taskReducer from "./taskReducer";
import taskContext from "./taskContext";

import { TASKS_PROJECT } from "../../types";

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

  return (
    <taskContext.Provider value={{ tasks: state.tasks, getTasks }}>
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
