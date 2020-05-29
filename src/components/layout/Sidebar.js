import React from "react";
import NewProject from "../projects/NewProject";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        TASKS<span>Manager</span>
      </h1>

      <NewProject />

      <div className="projects">
        <h2>Your projects</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
