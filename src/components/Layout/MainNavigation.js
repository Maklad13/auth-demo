import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/authContext";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!authCtx.isLoggedin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {authCtx.isLoggedin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {authCtx.isLoggedin && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
