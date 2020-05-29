import React from "react";
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import FormTask from "../tasks/FormTask";

const Projects = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <div className="main-section">
        <Bar />

        <main>
          <FormTask />

          <div className="tasks-container"></div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
