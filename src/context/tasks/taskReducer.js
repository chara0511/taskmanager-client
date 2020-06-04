import { TASKS_PROJECT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
