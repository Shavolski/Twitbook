import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Post from "../Post/Post";
import { useStyles } from "./PostListStyles";

const PostList = ({ userData, postData }) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={4} align="left" className={classes.mainGrid}>
        {postData.map((post, index) => {
          const user = userData.find((user) => user.id === post.userId);
          return <Post post={post} user={user} key={index} />;
        })}
      </Grid>
    </Container>
  );
};

export default PostList;
