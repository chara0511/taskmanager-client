import {
  TASKS_PROJECT,
  ADD_TASK,
  ERROR_ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  ACTUAL_TASK,
  CLEAN_TASK,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksproject: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        tasksproject: [action.payload, ...state.tasksproject],
        errortask: false,
      };

    case ERROR_ADD_TASK:
      return {
        ...state,
        errortask: true,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasksproject: state.tasksproject.filter(
          (task) => task._id !== action.payload
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasksproject: state.tasksproject.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };

    case ACTUAL_TASK:
      return {
        ...state,
        selectedtask: action.payload,
      };

    case CLEAN_TASK:
      return {
        ...state,
        selectedtask: null,
      };

    default:
      return state;
  }
};
