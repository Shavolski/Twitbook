import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Appbar from "shared/Appbar/Appbar";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import AuthorNameButton from "shared/AuthorButton/AuthorNameButton.js";
import { useParams } from "react-router-dom";
import {
  fetchSinglePost,
  fetchUserPostsComments,
  fetchSingleUser,
  fetchPostData,
  fetchUserData,
} from "shared/Utils/Api";
import PropTypes from "prop-types";
import { useStyles } from "./PostDetailsStyles";

const PostDetails = () => {
  const classes = useStyles();
  const params = useParams();

  const [post, setPost] = useState([]);
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [userName, setUserName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      let post = await fetchSinglePost(params.id);
      let comment = await fetchUserPostsComments(params.id);
      let username = await fetchSingleUser(params.id);
      let users = await fetchUserData();
      let posts = await fetchPostData();

      setUserData(users.data);
      setPostData(posts.data);

      setPost(post.data);
      setUserName(username.data);
      setUserComments(comment.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);

    return color;
  }

  return (
    <div className={classes.postDetailBC}>
      <Appbar userData={userData} postData={postData} />
      <Container id="fullpost">
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Container className={classes.root} maxWidth="md">
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
            </Container>
            <Container maxWidth="md">
              <Grid
                container
                spacing={4}
                align="left"
                className={classes.mainGrid}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Comments
                </Typography>
                {userComments.map((comment, index) => {
                  return (
                    <Grid item xs={12} key={index}>
                      <Card className={classes.userComments} boxShadow={0}>
                        <CardContent>
                          <Typography
                            variant="h5"
                            style={{ display: "inline-flex" }}
                            className={classes.title}
                          >
                            <Avatar
                              style={{
                                alignSelf: "center",
                                backgroundColor: randomColor(),
                              }}
                            >
                              {comment.email.charAt(0).toUpperCase()}
                            </Avatar>
                            <p style={{ paddingLeft: "15px" }}>
                              {comment.body}
                              <Typography
                                variant="body2"
                                component="p"
                                color="textSecondary"
                              >
                                {comment.email}
                              </Typography>
                            </p>
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
        )}
      </Container>
    </div>
  );
};

PostDetails.propTypes = {
  post: PropTypes.string,
};

export default PostDetails;
