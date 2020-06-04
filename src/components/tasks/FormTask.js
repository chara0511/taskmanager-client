import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const FormTask = () => {
  // Extract if a project is active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Validate
  if (!project) return null;

  // Applying array destructuring
  //const [actualProject] = project;

  return (
    <div className="form">
      <form>
        <div className="container-input">
          <input
            type="text"
            className="input-text"
            placeholder="Name"
            name="name"
          />
        </div>

        <div className="container-input">
          <input
            type="submit"
            className="btn btn-primary btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
