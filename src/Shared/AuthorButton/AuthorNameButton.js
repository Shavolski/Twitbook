import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  userNameButton: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "16px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#007AFF",
  },
}));

const AuthorNameButton = ({ post, user, index }) => {
  const classes = useStyles();

  return (
    <Button size="small" className={classes.userNameButton}>
      {user && (
        <Link
          style={{ textDecoration: "none", color: "#007AFF" }}
          key={user.id}
        >
          {user.username}
        </Link>
      )}
    </Button>
  );
};

export default AuthorNameButton;
