import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AuthorNameButton from "../../../../Shared/AuthorButton/AuthorNameButton.js";

//This is for the menu list when searching for usernames
const useStyles = makeStyles((theme) => ({
  root: {},
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

//This let's the user search for usernames available.
const Post = ({ post, user, index }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} mx={6} key={index}>
      <Card className={classes.root}>
        <CardContent>
          <Link
            to={{
              pathname: `/post/${post.title}`,
              state: {
                title: post.title,
                body: post.body,
              },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="h5" component="h2" className={classes.title}>
              {post.title}
            </Typography>
          </Link>
          <Typography variant="body2" component="p" color="textSecondary">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <AuthorNameButton post={post} user={user} key={index} />
        </CardActions>
      </Card>
    </Grid>
  );
};
export default Post;
