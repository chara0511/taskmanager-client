import React, { Fragment, useState } from "react";

const NewProject = () => {
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

  return (
    <Fragment>
      <button type="button" className="btn btn-primary btn-block">
        New
      </button>

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
    </Fragment>
  );
};

export default NewProject;
