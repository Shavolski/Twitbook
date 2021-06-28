import React, { useEffect, useState } from "react";
import Appbar from "shared/Appbar/Appbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import AuthorNameButton from "shared/AuthorButton/AuthorNameButton.js";
import { useParams } from "react-router-dom";
import { fetchSinglePost, fetchUserPostsComments } from "shared/Utils/Api";
import PropTypes from "prop-types";
import { useStyles } from "./PostDetailsStyles";

const PostDetails = () => {
  const classes = useStyles();
  const params = useParams();

  const [post, setPost] = useState([]);
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      let post = await fetchSinglePost(params.id);
      let comment = await fetchUserPostsComments(params.id);

      setPost(post.data);
      setUserComments(comment.data);
    };
    fetchPost();
  }, []);

  return (
    <div className={classes.postDetailBC}>
      <Appbar />
      <Container id="fullpost">
        <Box className={classes.root}>
          <Typography
            variant="h3"
            gutterBottom
            className={classes.titleName}
            display="block"
          >
            {post.title}
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            display="block"
            className={classes.titleBody}
          >
            {post.body}
          </Typography>
          <Container maxWidth="md">
            <Grid
              container
              spacing={4}
              align="left"
              className={classes.mainGrid}
            >
              <Typography variant="h5" component="h2" className={classes.title}>
                Comments
              </Typography>
              {userComments.map((comment, index) => {
                return (
                  <Grid item xs={12} key={index}>
                    <Card className={classes.userComments} boxShadow={0}>
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="h2"
                          className={classes.title}
                        >
                          {comment.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          color="textSecondary"
                        >
                          {comment.body}
                        </Typography>
                      </CardContent>
                    </Card>
                    <Divider className={classes.bottomDivider} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </Container>
    </div>
  );
};

PostDetails.propTypes = {
  post: PropTypes.string,
};

export default PostDetails;
