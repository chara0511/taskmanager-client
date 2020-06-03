import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
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
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Store Online" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Website Designs" },
  ];

  const initialState = {
    form: false,
    projects: [],
    error: false,
    project: null,
  };

  // Dispatch to execute the actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Functions to CRUD
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  // Get projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  // Adding a new project
  const addProject = (project) => {
    project.id = uuidv4();

    // adding a project in the state
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
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

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        error: state.error,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
