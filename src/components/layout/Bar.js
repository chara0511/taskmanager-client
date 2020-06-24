import React, { useContext, useEffect } from "react";

import authContext from "../../context/auth/authContext";

const Bar = () => {
  // Get auth info
  const { user, aunthenticatedUser, logOut } = useContext(authContext);

  useEffect(() => {
    aunthenticatedUser();
  }, []);
  return (
    <header className="app-header">
      {user ? (
        <p className="username">
          Hi, <span>{user.name}</span>
        </p>
      ) : null}

      <nav className="main-nav">
        <button className="btn btn-blank btn-logout" onClick={() => logOut()}>
          Log out
        </button>
      </nav>
    </header>
  );
};

export default Bar;
