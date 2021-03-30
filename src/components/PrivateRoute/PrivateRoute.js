import React, { useContext, createContext } from "react";
import {
  BrowserRouter as   Route,  Redirect} from "react-router-dom";
import { UserContext } from "../../App";


const PrivateRoute = ({children, ...rest}) => {
     const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.name ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/addEvents",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;