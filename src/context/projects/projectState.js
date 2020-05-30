import React, { useReducer } from "react";

import projectReducer from "./projectReducer";
import projectContext from "./projectContext";

const ProjectState = (props) => {
  const initialState = {
    form: false,
  };

  // Dispatch to execute the actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Functions to CRUD

  return (
    <projectContext.Provider value={{ form: state.form }}>
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
