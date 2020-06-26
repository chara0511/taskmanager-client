import React, { useReducer } from "react";
import taskReducer from "./taskReducer";
import taskContext from "./taskContext";

import {
  TASKS_PROJECT,
  ADD_TASK,
  ERROR_ADD_TASK,
  DELETE_TASK,
  STATE_TASK,
  ACTUAL_TASK,
  EDIT_TASK,
  CLEAN_TASK,
} from "../../types";
import userAxios from "../../config/axios";

const TaskState = (props) => {
  const initialState = {
    tasksproject: [],
    errortask: false,
    selectedtask: null,
  };

  // Dispatch to execute the actions
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Main functions
  // Get tasks for each project
  const getTasks = async (project) => {
    try {
      const response = await userAxios.get("/api/tasks", {
        params: { project },
      });

      //console.log(response.data.tasks);

      dispatch({
        type: TASKS_PROJECT,
        payload: response.data.tasks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Add a task to the selected project
  const addTask = async (task) => {
    try {
      const response = await userAxios.post("/api/tasks", task);

      //console.log(response);

      dispatch({
        type: ADD_TASK,
        payload: response.data.task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Validate and show error when adding a task
  const errorTask = () => {
    dispatch({
      type: ERROR_ADD_TASK,
    });
  };

  // Delete task by Id
  const deleteTask = async (id, project) => {
    try {
      await userAxios.delete(`/api/tasks/${id}`, { params: { project } });

      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Change the state for each task
  const changeStateTask = (task) => {
    dispatch({
      type: STATE_TASK,
      payload: task,
    });
  };

  // Extract a task to edit
  const saveActualTask = (task) => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task,
    });
  };

  // Edit a task
  const editTask = (task) => {
    dispatch({
      type: EDIT_TASK,
      payload: task,
    });
  };

  // Clean selected task
  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        selectedtask: state.selectedtask,
        getTasks,
        addTask,
        errorTask,
        deleteTask,
        changeStateTask,
        saveActualTask,
        editTask,
        cleanTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
