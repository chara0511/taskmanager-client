import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../../context/auth/authContext";

const Private = ({ component: Component, ...props }) => {
  const { auth, loading, aunthenticatedUser } = useContext(authContext);

  useEffect(() => {
    aunthenticatedUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !auth && !loading ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
export default Private;
