import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./AuthorNameButtonStyles";

const AuthorNameButton = ({ user }) => {
  const classes = useStyles();

  return (
    <Link
      component={Button}
      size="small"
      className={classes.userNameLink}
      key={user.id}
      to={{
        pathname: `/users/${user.id}`,
      }}
    >
      {user.username}
    </Link>
  );
};

export default AuthorNameButton;
