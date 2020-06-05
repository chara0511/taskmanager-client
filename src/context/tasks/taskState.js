import React, { useReducer } from "react";
import taskReducer from "./taskReducer";
import taskContext from "./taskContext";

import {
  TASKS_PROJECT,
  ADD_TASK,
  ERROR_ADD_TASK,
  DELETE_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Choose platform", state: true, projectId: 1 },
      { id: 2, name: "Choose colors", state: false, projectId: 2 },
      { id: 3, name: "Choose payment platforms", state: false, projectId: 3 },
      { id: 4, name: "Choose hosting", state: true, projectId: 4 },

      { id: 5, name: "Choose platform", state: true, projectId: 1 },
      { id: 6, name: "Choose colors", state: false, projectId: 2 },
      { id: 7, name: "Choose payment platforms", state: false, projectId: 3 },

      { id: 8, name: "Choose platform", state: true, projectId: 4 },
      { id: 9, name: "Choose colors", state: false, projectId: 1 },
      { id: 10, name: "Choose payment platforms", state: false, projectId: 2 },

      { id: 11, name: "Choose platform", state: true, projectId: 3 },
      { id: 12, name: "Choose colors", state: false, projectId: 4 },
      { id: 13, name: "Choose payment platforms", state: false, projectId: 3 },
    ],
    tasksproject: null,
    errortask: false,
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

  // Validate and show error when adding a task
  const errorTask = () => {
    dispatch({
      type: ERROR_ADD_TASK,
    });
  };

  // Delete task by Id
  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        getTasks,
        addTask,
        errorTask,
        deleteTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
