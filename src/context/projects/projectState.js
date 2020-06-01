import React, { useReducer } from "react";

// Hooks
import projectReducer from "./projectReducer";
import projectContext from "./projectContext";

// Types
import { FORM_PROJECT, GET_PROJECTS } from "../../types";

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

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showForm,
        getProjects,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
