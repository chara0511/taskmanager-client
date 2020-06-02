import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
// Hooks
import projectReducer from "./projectReducer";
import projectContext from "./projectContext";

// Types
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT } from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Store Online" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Website Designs" },
  ];

  const initialState = {
    form: false,
    projects: [],
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

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showForm,
        getProjects,
        addProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
