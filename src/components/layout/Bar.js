import React from "react";

const Bar = () => {
  return (
    <header className="app-header">
      <p className="username">
        Hello <span>Juan</span>
      </p>
      <nav className="main-nav">
        <a href="#!">Logout</a>
      </nav>
    </header>
  );
};

export default Bar;
