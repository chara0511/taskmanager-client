import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  ERROR_ADD_PROJECT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        error: false,
      };
    case ERROR_ADD_PROJECT:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
