import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./AuthorNameButtonStyles";

const AuthorNameButton = ({ post, user, index }) => {
  const classes = useStyles();

  return (
    <Button size="small" className={classes.userNameButton}>
      {user && (
        <Link className={classes.userNameLink} key={user.id}>
          {user.username}
        </Link>
      )}
    </Button>
  );
};

export default AuthorNameButton;
