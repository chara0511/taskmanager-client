import React, { useReducer } from "react";

// Hooks
import projectReducer from "./projectReducer";
import projectContext from "./projectContext";

// Types
import { FORM_PROJECT } from "../../types";

const ProjectState = (props) => {
  const initialState = {
    form: false,
  };

  // Dispatch to execute the actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Functions to CRUD
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        showForm,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
