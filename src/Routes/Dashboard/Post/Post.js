import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AuthorNameButton from "shared/AuthorButton/AuthorNameButton.js";
import PropTypes from "prop-types";
import { useStyles } from "./PostStyles";

const Post = ({ post, user, index }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} mx={6} key={index}>
      <Card>
        <CardContent>
          <Link
            to={{
              pathname: `/post/${post.title}`,
              state: {
                title: post.title,
                body: post.body,
              },
            }}
            className={classes.cardLink}
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

Post.propTypes = {
  user: PropTypes.string,
  post: PropTypes.string,
  index: PropTypes.string,
};

export default Post;
