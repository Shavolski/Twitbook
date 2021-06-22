import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Post from "../Post/Post";
//import CircularProgress from "@material-ui/core/CircularProgress";

//This is for the menu list when searching for usernames
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: "100px",
  },
  title: {
    fontWeight: "600",
    marginBottom: "10px",
  },
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
