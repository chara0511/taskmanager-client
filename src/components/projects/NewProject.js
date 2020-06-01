import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  // Get state of the form
  const projectsContext = useContext(projectContext);
  const { form, showForm } = projectsContext;

  const [project, setProject] = useState({
    name: "",
  });

  const { name } = project;

  // Listen a change in input
  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // Send a project
  const onSubmitProject = (e) => {
    e.preventDefault();

    // Validate project

    // Add a state

    // Restart form
  };

  // Show form
  const onClickForm = () => {
    showForm();
  };

  return (
    <Fragment>
      <button
        type="button"
        onClick={onClickForm}
        className="btn btn-primary btn-block"
      >
        New
      </button>

      {form ? (
        <form className="form-new-project" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Project's name"
            name="name"
            value={name}
            onChange={onChangeProject}
          />

          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Add"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
