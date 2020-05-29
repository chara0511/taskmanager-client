import React from "react";
import Project from "./Project";

const ListProjects = () => {
  const projects = [
    { name: "Store Online" },
    { name: "Intranet" },
    { name: "Website Designs" },
  ];
  return (
    <ul className="list-projects">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
