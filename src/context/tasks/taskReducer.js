import { TASKS_PROJECT, ADD_TASK, ERROR_ADD_TASK } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksproject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        errortask: false,
      };

    case ERROR_ADD_TASK:
      return {
        ...state,
        errortask: true,
      };
    default:
      return state;
  }
};
