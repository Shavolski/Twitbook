import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../Shared/Navbar/Appbar/Appbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AuthorNameButton from "../../../../Shared/AuthorButton/AuthorNameButton.js";
import { useStyles } from "./PostDetailsStyles";

const PostDetails = ({ post, user, index }) => {
  const classes = useStyles();
  const location = useLocation({});

  const { title, body } = location.state;

  return (
    <div className={classes.postDetailBC}>
      <Navbar />
      <Container id="fullpost">
        <Box className={classes.root}>
          <Typography
            variant="h3"
            gutterBottom
            className={classes.titleName}
            display="block"
          >
            {title}
          </Typography>

          <AuthorNameButton post={post} user={user} key={index} />

          <Typography
            variant="body1"
            gutterBottom
            display="block"
            className={classes.titleBody}
          >
            {body}
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default PostDetails;
