import React, { useEffect, useState } from "react";
import Appbar from "shared/Appbar/Appbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AuthorNameButton from "shared/AuthorButton/AuthorNameButton.js";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "shared/Utils/Api";
import PropTypes from "prop-types";
import { useStyles } from "./PostDetailsStyles";

const PostDetails = () => {
  const classes = useStyles();
  const params = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      let post = await fetchSinglePost(params.id);

      setPost(post.data);
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
        </Box>
      </Container>
    </div>
  );
};

PostDetails.propTypes = {
  post: PropTypes.string,
};

export default PostDetails;
