import React, { useReducer } from "react";

// Hooks
import projectReducer from "./projectReducer";
import projectContext from "./projectContext";

// Types
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  ERROR_ADD_PROJECT,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from "../../types";

import userAxios from "../../config/axios";

const ProjectState = (props) => {
  const initialState = {
    form: false,
    projects: [],
    error: false,
    project: null,
    message: null,
  };

  // Dispatch to execute the actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Functions to CRUD

  // Show Form
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  // Get projects
  const getProjects = async () => {
    try {
      const response = await userAxios.get("/api/projects");

      //console.log(response.data);
      dispatch({
        type: GET_PROJECTS,
        payload: response.data.projects,
      });
    } catch (error) {
      //console.log(error);
      const alert = {
        msg: "Error getting project",
        category: "alert-error",
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  // Adding a new project
  const addProject = async (project) => {
    try {
      const response = await userAxios.post("/api/projects", project);

      //console.log(response.data);

      // adding a project in the state
      dispatch({
        type: ADD_PROJECT,
        payload: response.data,
      });
    } catch (error) {
      //console.log(error);
      const alert = {
        msg: "Error adding project",
        category: "alert-error",
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  // Validate showing an Error when adding a new project
  const showError = () => {
    dispatch({
      type: ERROR_ADD_PROJECT,
    });
  };

  // Select a project when the user clicks
  const actualProject = (projectId) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId,
    });
  };

  // Delete a project
  const deleteProject = async (projectId) => {
    try {
      await userAxios.delete(`/api/projects/${projectId}`);

      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      //console.log(error);
      const alert = {
        msg: "Error deleting project",
        category: "alert-error",
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        error: state.error,
        project: state.project,
        message: state.message,
        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
